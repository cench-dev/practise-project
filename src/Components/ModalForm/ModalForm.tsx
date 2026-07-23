import { Button } from '../UI/Button/Button';
import styles from './ModalForm.module.scss';
import closeIcon from '../../assets/x-mark.svg';
import { useForm } from "react-hook-form";
import { plannedBookSchema } from '../../schemas/plannedBookSchema';
import { readBookSchema } from '../../schemas/readBookSchema';
import { wishlistSchema } from '../../schemas/wishlistSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../UI/Input/Input';
import { TextArea } from '../UI/TextArea/TextArea';
import { createBook, markBookAsRead } from '../../api/bookApi';
import type { Book, BookStatus } from '../../types/bookTypes';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../Stores/authStore';
import { useEffect } from 'react';
import { showToast } from '../../Reducers/toastReducer';
export interface BookForm {
    title: string;
    author: string;
    rating?: number;
    review?: string;
    link?: string;
    fabric?: string;
    readingGoal?: number;
    goalYear?: number;
}
type BookModalProps = {
    open: boolean;
    onClose: () => void;
    status: BookStatus;
    book?: Book;
}
export function ModalForm({ open, onClose, status, book }: BookModalProps) {
    const schema = status === 'READ' ? readBookSchema : status === 'PLANNED' ? plannedBookSchema : wishlistSchema;
    const user = useSelector(
        (state: RootState) => state.auth.user
    )
    const form = useForm<BookForm>({
        resolver: yupResolver(schema),
        defaultValues: {
            title: book?.title ?? "",
            author: book?.author ?? "",
            rating: book?.rating,
            review: book?.review ?? "",
            link: book?.link ?? "",
            fabric: book?.fabric ?? "",
            readingGoal: 0,
            goalYear: new Date().getFullYear()   
        }
    });

    const dispatch = useDispatch();

    useEffect(() => {
        form.reset({
            title: book?.title ?? "",
            author: book?.author ?? "",
            rating: book?.rating,
            review: book?.review ?? "",
            link: book?.link ?? "",
            fabric: book?.fabric ?? ""
        });
    }, [book]);
    if (!open) return null;


    const submit = async (data: BookForm) => {
        if (!user) {
            return;
        }

        try {
            if (book) {
                await markBookAsRead(book.id, {
                    rating: data.rating,
                    review: data.review
                });
            } else {
                await createBook({
                    ...data,
                    status,
                    userId: user.id
                });
            }

            dispatch(showToast("Книга успешно добавлена"));

            onClose();

        } catch(error) {
            console.log(error);
        }
    };
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalActive}>
                <p>Добавить книгу</p>
                <form onSubmit={form.handleSubmit(submit)} className={styles.form}>
                    <div className={styles.section__inputs}>
                        <Input {...form.register('title')} placeholder="Название"/>
                        <p>{form.formState.errors.title?.message}</p>
                        <Input {...form.register('author')} placeholder="Автор"/>
                        <p>{form.formState.errors.author?.message}</p>
                        {status === 'READ' && (
                            <>
                                <Input {...form.register('rating', { setValueAs: value => value === '' ? undefined : Number(value),})} placeholder="Поставь оценку!"/>
                                <p>{form.formState.errors.rating?.message}</p>
                                <TextArea {...form.register('review')} placeholder="Есть что сказать про книгу? Не более 160 символов"/>
                                <p>{form.formState.errors.review?.message}</p>
                            </>
                        )}
                        {status === 'WISHLIST' && (
                            <>
                                <Input {...form.register('link')} placeholder="Прикрепи ссылку на книгу, если считаешь нужным"/>
                                <Input {...form.register('fabric')} placeholder="Если есть пожелания по изданию"/>
                            </>
                        )}
                    </div>
                    <div className={styles.button}>
                        <Button type='submit'>Добавить книгу</Button>
                    </div>
                </form>

                <div className={styles.modalClose}>
                    <Button onClick={onClose}><img src={closeIcon}></img></Button>
                </div>
                <div className={styles.modalWindow}></div>
            </div>
        </div>
    )
}


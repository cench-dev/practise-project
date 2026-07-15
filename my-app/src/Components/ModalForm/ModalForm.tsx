import { Button } from '../UI/Button/Button';
import styles from './ModalForm.module.scss';
import closeIcon from '../../assets/x-mark.svg';
import { useForm } from 'react-hook-form';
import { plannedBookSchema } from '../../schemas/plannedBookSchema';
import { readBookSchema } from '../../schemas/readBookSchema';
import { wishlistSchema } from '../../schemas/wishlistSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../UI/Input/Input';
import { TextArea } from '../UI/TextArea/TextArea';
import { createBook } from '../../api/bookApi';
import type { BookStatus } from '../../types/bookTypes';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Stores/authStore';
export interface BookForm {
    title: string;
    author: string;
    rating?: number;
    review?: string;
    link?: string;
    fabric?: string;
}
type BookModalProps = {
    open: boolean;
    onClose: () => void;
    status: BookStatus,
}
export function ModalForm({ open, onClose, status }: BookModalProps) {
    const schema = status === 'READ' ? readBookSchema : status === 'PLANNED' ? plannedBookSchema : wishlistSchema;
    const user = useSelector(
        (state: RootState) => state.auth.user
    )
    const form = useForm<BookForm>({
        resolver: yupResolver(schema)
    });
    if (!open) return null;


    const submit = async (data: BookForm) => {
        if (!user) {
            return;
        }

        try {
            await createBook({
                ...data,
                status,
                userId: user.id
            });

            alert('Книга добавлена');

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
                        <Button type='submit'>Отправить данные</Button>
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
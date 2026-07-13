import { Button } from '../UI/Button/Button';
import styles from './ModalForm.module.scss';
import closeIcon from '../../assets/x-mark.svg';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { plannedBookSchema } from '../../schemas/plannedBookSchema';
import { readBookSchema } from '../../schemas/readBookSchema';
import { wishlistSchema } from '../../schemas/wishlistSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../UI/Input/Input';
import { TextArea } from '../UI/TextArea/TextArea';
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
    status: string,
}
export function ModalForm({ open, onClose, status }: BookModalProps) {
    const schema = status === 'read' ? readBookSchema : status === 'planned' ? plannedBookSchema : wishlistSchema;
    const form = useForm<BookForm>({
        resolver: yupResolver(schema)
    });
    if (!open) return null;

    const submit = () => {
        //console.log(data);
        alert('Данные приняты');
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
                        {status === 'read' && (
                            <>
                                <Input {...form.register('rating')} placeholder="Поставь оценку!"/>
                                <p>{form.formState.errors.rating?.message}</p>
                                <TextArea {...form.register('review')} placeholder="Есть что сказать про книгу? Не более 160 символов"/>
                                <p>{form.formState.errors.review?.message}</p>
                            </>
                        )}
                        {status === 'wishlist' && (
                            <>
                                <Input {...form.register('link')} placeholder="Прикрепи ссылку на книгу, если считаешь нужным"/>
                                <Input {...form.register('fabric')} placeholder="Если есть пожелания по изданию"/>
                            </>
                        )}
                    </div>
                
                </form>
                <div className={styles.button}>
                    <Button onClick={submit}>Отправить данные</Button>
                </div>
                <div className={styles.modalClose}>
                    <Button onClick={onClose}><img src={closeIcon}></img></Button>
                </div>
                <div className={styles.modalWindow}></div>
            </div>
        </div>
    )
}
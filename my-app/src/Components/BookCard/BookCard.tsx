import styles from './BookCard.module.scss';
import bookIcon from '../../assets/book-open.svg';
import type { Book } from '../../types/bookTypes';
import { Button } from '../UI/Button/Button';

type BookCardProps = {
    book: Book;
    onMarkAsRead?: (book: Book) => void;
    canEdit?: boolean;
}



export function BookCard( { book, onMarkAsRead, canEdit }: BookCardProps) {
    return (
        <div className={styles.book}>
            <img src={bookIcon} className={styles.icon}></img>
            <div className={styles.info}>
                <div className={styles.meta}>
                    <p>{ book.title }</p>
                    <p>{ book.author }</p>
                    {book.status === 'READ' && (
                        <p>{book.rating}/5</p>
                    )}
                    {book.status === 'WISHLIST' && (
                        <p>{book.link}/5</p>
                    )}
                    {book.status === 'WISHLIST' && (
                        <p>{ book.fabric }</p>
                    )}
                </div>
                <p>{ book.review }</p>    
            </div>
            {book.status === 'PLANNED' && canEdit && (
                <Button onClick={() => onMarkAsRead?.(book)}>Прочитано</Button>
            )}
            
        </div>
    )
}
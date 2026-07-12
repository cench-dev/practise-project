import styles from './BookCard.module.scss';
import bookIcon from '../../assets/book-open.svg';
import type { Book } from '../../mock/mock';


type BookCardProps = {
    book: Book;
}

export function BookCard( { book }: BookCardProps) {
    return (
        <div className={styles.book}>
            <img src={bookIcon} className={styles.icon}></img>
            <div className={styles.info}>
                <div className={styles.meta}>
                    <p>{ book.title }</p>
                    <p>{ book.author }</p>
                    {book.status === 'read' && (
                        <p>{book.rating}/5</p>
                    )}
                    {book.status === 'wishlist' && (
                        <p>{book.link}/5</p>
                    )}
                    {book.status === 'wishlist' && (
                        <p>{ book.fabric }</p>
                    )}
                </div>
                <p>{ book.review }</p>    
            </div>
            
        </div>
    )
}
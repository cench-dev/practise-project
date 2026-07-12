import styles from './BookCard.module.scss';
import bookIcon from '../../assets/book-open.svg';
type BookCardProps = {
    title: string;
    author: string;
    rating: number;
    review: string;
}

export function BookCard( { title, author, rating, review }: BookCardProps) {

    return (
        <div className={styles.book}>
            <img src={bookIcon} className={styles.icon}></img>
            <div className={styles.info}>
                <div className={styles.meta}>
                    <p >{ title }</p>
                    <p>{ author }</p>
                    <p>{ rating }/5</p>
                </div>
                <p>{ review }</p>    
            </div>
            
        </div>
    )
}
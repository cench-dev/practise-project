import { books } from '../../mock/mock';
import { BookCard } from '../BookCard/BookCard';
import styles from './BookList.module.scss';
import type { BookStatus } from '../../mock/mock';

type BookListProps = {
    status: BookStatus;
};

export function BookList({ status }: BookListProps) {
    const filteredBooks = books.filter((book) => book.status === status);
    return (
        <div className={styles.books}>
            {filteredBooks.map((book) => (
                <BookCard
                key={book.id}
                book={book} />
            ))}
        </div>
    )
}
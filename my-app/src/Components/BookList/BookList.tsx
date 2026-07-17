import { useEffect, useState } from 'react';
import { BookCard } from '../BookCard/BookCard';
import { getUserBooks } from '../../api/bookApi';
import type { Book, BookStatus} from '../../types/bookTypes';
import styles from './BookList.module.scss';

type BookListProps = {
    status: BookStatus;
    userId: number;
    onMarkAsRead?: (book: Book) => void;
};


export function BookList({ status, userId, onMarkAsRead }: BookListProps) {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {

        async function fetchBooks() {
            const data = await getUserBooks(
                userId,
                status
            );

            setBooks(data);
        }

        fetchBooks();

    }, [status, userId]);

    return (
        <div className={styles.books}>
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={book}
                    onMarkAsRead={onMarkAsRead}
                />
            ))}
        </div>
    );
}
import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg'
import { books } from "../../mock/mock";
import { BookCard } from "../BookCard/BookCard";
import styles from './ReadBooks.module.scss'

export function ReadBooks() {
    return(
        <>
            <Button icon={addIcon}>
                Добавить книгу
            </Button>
            <div className={styles.books}>
                {books.map((book) => (
                    <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    rating={book.rating}
                    review={book.review} />
                ))}
            </div>
        </>
    )
}

// прогресс бар
// поменять label у статистики
// аватар поменять 

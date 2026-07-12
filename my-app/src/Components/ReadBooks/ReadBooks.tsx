import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg'
import styles from './ReadBooks.module.scss'
import { BookList } from "../BookList/BookList";

export function ReadBooks() {
    return(
        <>
            <Button icon={addIcon}>
                Добавить книгу
            </Button>
            <div className={styles.books}>
                <BookList status='read'/>
            </div>
        </>
    )
}

// прогресс бар
// поменять label у статистики
// аватар поменять 

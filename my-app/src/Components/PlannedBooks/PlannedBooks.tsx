import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";

export function PlannedBooks() {
    return(
        <>
            <Button icon={addIcon}>
                Добавить книгу
            </Button>
            <BookList status="planned"/>
        </>
    )
}
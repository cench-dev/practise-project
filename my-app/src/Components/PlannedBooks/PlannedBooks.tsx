import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg';

export function PlannedBooks() {
    return(
        <>
            <Button icon={addIcon}>
                Добавить книгу
            </Button>
            <p>Автор</p>
            <p>Грэг грегович</p>
        </>
    )
}
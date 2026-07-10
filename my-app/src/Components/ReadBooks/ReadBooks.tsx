import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg'

export function ReadBooks() {
    return(
        <>
            <Button icon={addIcon}>
                Добавить книгу
            </Button>
            <p>Название</p>
            <p>1984</p>
            <p>Автор</p>
            <p>Джордж Оруэлл</p>
            <p>Оценка</p>
            <p>5/5</p>
            <p>Отзыв</p>
            <p>Клевая книга</p>
        </>
    )
}
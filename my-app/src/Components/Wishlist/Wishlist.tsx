import { Button } from "../UI/Button/Button"
import addIcon from '../../assets/plus.svg';

export function Wishlist() {
    return(
        <>
            <Button icon={addIcon}>Добавить книгу</Button>
            
            <p>Пушкин</p>
            <p>Финес и ферб</p>
        </>
    )
}
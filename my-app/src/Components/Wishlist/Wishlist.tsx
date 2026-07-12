import { Button } from "../UI/Button/Button"
import { WishlistText } from "../WishlistText/WishlistText";
import addIcon from '../../assets/plus.svg';

export function Wishlist() {
    return(
        <>
            <Button icon={addIcon}>Добавить книгу</Button>
            <WishlistText />
            
            <p>Пушкин</p>
            <p>Финес и ферб</p>
        </>
    )
}
import { Button } from "../UI/Button/Button"
import { WishlistText } from "../WishlistText/WishlistText";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";

export function Wishlist() {
    return(
        <>
            <Button icon={addIcon}>Добавить книгу</Button>
            <WishlistText />
            
            <BookList status="wishlist"/>
        </>
    )
}
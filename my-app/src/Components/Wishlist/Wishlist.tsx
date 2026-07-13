import { Button } from "../UI/Button/Button"
import { WishlistText } from "../WishlistText/WishlistText";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";
import { ModalForm } from "../ModalForm/ModalForm";
import { useState } from "react";

export function Wishlist() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <Button icon={addIcon} onClick={() => setIsOpen(true)}>Добавить книгу</Button>
            <WishlistText />
            
            <BookList status="wishlist"/>
            <ModalForm open={isOpen} status="wishlist" onClose={() => setIsOpen(false)}/>
        </>
    )
}
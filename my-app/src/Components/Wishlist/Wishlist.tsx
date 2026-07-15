import { Button } from "../UI/Button/Button"
import { WishlistText } from "../WishlistText/WishlistText";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";
import { ModalForm } from "../ModalForm/ModalForm";
import { useState } from "react";
import { useUserId } from "../../hooks/useUserId";

export function Wishlist() {
    const [isOpen, setIsOpen] = useState(false);
    const userId = useUserId();
    return(
        <>
            <Button icon={addIcon} onClick={() => setIsOpen(true)}>Добавить книгу</Button>
            <WishlistText />
            
            <BookList status="WISHLIST" userId={userId}/>
            <ModalForm open={isOpen} status="WISHLIST" onClose={() => setIsOpen(false)}/>
        </>
    )
}
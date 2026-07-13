import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";
import { ModalForm } from "../ModalForm/ModalForm";
import { useState } from "react";

export function PlannedBooks() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <Button icon={addIcon} onClick={() => setIsOpen(true)}>
                Добавить книгу
            </Button>
            <BookList status="planned"/>
            <ModalForm onClose={() => setIsOpen(false)} open={isOpen} status='planned'/>
        </>
    )
}
import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";
import { ModalForm } from "../ModalForm/ModalForm";
import { useState } from "react";
import { useUserId } from "../../hooks/useUserId";

export function PlannedBooks() {
    const [isOpen, setIsOpen] = useState(false);
    const userId = useUserId();
    return(
        <>
            <Button icon={addIcon} onClick={() => setIsOpen(true)}>
                Добавить книгу
            </Button>
            <BookList status="PLANNED" userId={userId}/>
            <ModalForm onClose={() => setIsOpen(false)} open={isOpen} status='PLANNED'/>
        </>
    )
}
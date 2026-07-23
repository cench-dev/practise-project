import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg';
import { BookList } from "../BookList/BookList";
import { ModalForm } from "../ModalForm/ModalForm";
import { useState } from "react";
import { useUserId } from "../../Hooks/useUserId";
import type { Book, BookStatus } from "../../Types/BookTypes";
import { useIsOwner } from "../../Hooks/useIsOwner";

export function PlannedBooks() {
    const [isOpen, setIsOpen] = useState(false);
    const isOwner = useIsOwner();
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [modalStatus, setModalStatus] = useState<BookStatus>('PLANNED');
    const userId = useUserId();
    function handleMarkAsRead(book: Book) {
        setSelectedBook(book);
        setModalStatus('READ');
        setIsOpen(true);
    }

    function handleAddBook() {
        setSelectedBook(null);
        setModalStatus('PLANNED')
        setIsOpen(true);
    }
    return(
        <>
            {isOwner && (
                <Button icon={addIcon} onClick={handleAddBook}>
                    Добавить книгу
                </Button>
            )}

            <BookList status="PLANNED" userId={userId} onMarkAsRead={handleMarkAsRead} canEdit={isOwner}/>
            <ModalForm onClose={() => {setIsOpen(false); setSelectedBook(null);}} 
                open={isOpen} 
                status={modalStatus} 
                book={selectedBook ?? undefined}
                
            />
        </>
    )
}
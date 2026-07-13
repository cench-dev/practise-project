import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg'
import styles from './ReadBooks.module.scss'
import { BookList } from "../BookList/BookList";
import { useState } from "react";
import { ModalForm } from "../ModalForm/ModalForm";

export function ReadBooks() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <Button icon={addIcon} onClick={() => setIsOpen(true)}>
                Добавить книгу
            </Button>
            <div className={styles.books}>
                <BookList status='read'/>
            </div>
            <ModalForm onClose={() => setIsOpen(false)} open={isOpen} status='read'/>
        </>
    )
}

// прогресс бар


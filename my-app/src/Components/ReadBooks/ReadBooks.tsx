import { Button } from "../UI/Button/Button";
import addIcon from '../../assets/plus.svg'
import styles from './ReadBooks.module.scss'
import { BookList } from "../BookList/BookList";
import { useState } from "react";
import { ModalForm } from "../ModalForm/ModalForm";
import { useUserId } from "../../hooks/useUserId";
export function ReadBooks() {
    const [isOpen, setIsOpen] = useState(false);
    const userId = useUserId();
    return(
        <>
            <Button icon={addIcon} onClick={() => setIsOpen(true)}>
                Добавить книгу
            </Button>
            <div className={styles.books}>
                <BookList status='READ' userId={userId}/>
            </div>
            <ModalForm onClose={() => setIsOpen(false)} open={isOpen} status='READ'/>
        </>
    )
}

// прогресс бар


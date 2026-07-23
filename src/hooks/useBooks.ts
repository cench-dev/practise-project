import { useEffect, useState } from "react";
import { getAllUserBooks } from "../api/bookApi";
import type { Book } from "../Types/BookTypes";


export function useBooks(userId: number) {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        async function fetchBooks() {
            const response = await getAllUserBooks(userId);
            setBooks(response);
        }
        fetchBooks();
    }, [userId]);

    return books;
}
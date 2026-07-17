import { api } from './axios';
import type { CreateBook, BookStatus } from '../types/bookTypes';


export async function getUserBooks(
    userId: number,
    status: BookStatus
) {
    const response = await api.get(
        `/books/user/${userId}`,
        {
            params: {
                status
            }
        }
    );

    return response.data;
}

export async function createBook(data: CreateBook) {
    const response = await api.post(
        '/books',
        data
    );

    return response.data;
}

export async function getAllUserBooks(
    userId: number
) {

    const response = await api.get(
        `/books/user/${userId}`
    );

    return response.data;

}

export async function markBookAsRead(
    id: number,
    data: {
        rating?: number;
        review?: string;
    }
) {
    const response = await api.patch(
        `http://localhost:5000/books/${id}/read`,
        data
    );

    return response.data;
}
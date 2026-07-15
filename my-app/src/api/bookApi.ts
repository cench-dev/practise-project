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
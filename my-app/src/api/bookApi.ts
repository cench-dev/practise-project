import { api } from './axios';
import type { Book, BookStatus } from '../mock/mock';


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
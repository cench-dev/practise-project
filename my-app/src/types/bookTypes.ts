export type BookStatus = 'READ' | 'PLANNED' | 'WISHLIST';


export interface Book {
    id: number;
    title: string;
    author: string;
    rating?: number;
    review?: string;
    link?: string;
    fabric?: string;
    status: BookStatus;
}
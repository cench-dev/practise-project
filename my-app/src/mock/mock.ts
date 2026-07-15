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

export const books: Book[] = [
    {
        id: 1,
        title: '1984',
        author: 'Дджордж оруэлл',
        rating: 5,
        review: 'Обалденно',
        status: 'READ'
    },
    {
        id: 2,
        title: 'Мастер и Маргарита',
        author: 'Булгаков',
        rating: 5,
        review: 'Остались вопросы....',
        status: 'READ'
    },
    {
        id: 3,
        title: 'finesss and ferb',
        author: 'pushkin',
        status: 'PLANNED'
    },
        {
        id: 4,
        title: 'harry potter',
        author: 'roaling',
        link: 'http:///',
        fabric: 'литрес',
        status: 'WISHLIST'
    },
]
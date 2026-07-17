import { Response, Request } from 'express';
import { prisma } from '../prisma/prisma';

import { BookStatus } from '@prisma/client';

export async function createBook(
    req: Request,
    res: Response
) {
    try {
        const {
            title,
            author,
            rating,
            review,
            link,
            fabric,
            status,
            userId
        } = req.body;

        const book = await prisma.book.create({
            data: {
                title,
                author,
                rating,
                review,
                link,
                fabric,
                status,
                userId
            }
        });

        res.status(201).json(book);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            
            message: 'Server error'
        });
    }
}

export async function getUserBooks(
    req: Request,
    res: Response
) {
    try {
        const userId = Number(req.params.id);
        const status = req.query.status as BookStatus;

        const books = await prisma.book.findMany({
            where: {
                userId,
                status
            }
        });

        res.json(books);

    } catch (error) {
        res.status(500).json({
            message: 'Server error'
        });
    }
}

export async function markBookAsRead(req: Request, res: Response) {
    try {

        const id = Number(req.params.id);

        const { rating, review } = req.body;

        const book = await prisma.book.update({
            where: {
                id
            },
            data: {
                status: "READ",
                rating,
                review
            }
        });

        res.json(book);

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }
}
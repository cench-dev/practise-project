import { Response, Request } from 'express';
import { prisma } from '../prisma/prisma';
import { AuthRequest } from '../middleware/authMiddleware';
import { BookStatus } from '@prisma/client';

export async function createBook(
    req: AuthRequest,
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
            status
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
                userId: req.user!.id
            }
        });

        res.status(201).json(book);

    } catch (error) {
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
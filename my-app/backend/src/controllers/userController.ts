import { Request, Response } from 'express';
import { prisma } from '../prisma/prisma';
import { BookStatus } from '@prisma/client';

export async function getUserBooks(
    req: Request,
    res: Response
) {
    const userId = Number(req.params.id);
    const status = req.query.status as BookStatus;

    const books = await prisma.book.findMany({
        where: {
            userId,
            status
        }
    });

    res.json(books);
}
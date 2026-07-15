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

export async function getUser(req: Request, res: Response) {
    try {

        const id = Number(req.params.id);

        const user = await prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                username: true
            }
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);

    } catch (error) {

        res.status(500).json({
            message: "Server error"
        });

    }
}
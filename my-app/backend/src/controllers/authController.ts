import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { prisma } from "../prisma/prisma";
import jwt from 'jsonwebtoken';

export async function register(req: Request, res: Response) {
    try {
        const { username, password } = req.body;
        
        const existingUser = await prisma.user.findUnique({where: {
            username
        }});

        if (existingUser) {
            return res.status(400).json({
                message: 'user already exist'
            });
        };

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });
        

        return res.status(201).json({
            id: user.id,
            username: user.username
        });
    } catch (error) {
        return res.status(500).json({
            message: 'Server error'
        });
    }
}

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
        where: {
            username
        }
    });

    if (!user) {
        return res.status(404).json({
            message: 'user not found'
        })
    };

    const isPasswordValid = bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid) {
        return res.status(401).json({
            message: 'wrong password'
        })
    };

    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        process.env.JWT_SECRET!,
        {
            expiresIn: '7d'
        }
    );


    return res.json({
        token,
        user: {
            id: user.id,
            username: user.username
        }
    });
}
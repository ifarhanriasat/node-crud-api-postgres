// firebase-auth.middleware.ts
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export async function AuthMiddleware(req: Request, res: Response, next: NextFunction) {

  const token = req.headers.authorization?.split(' ')[1];

    if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {

        if (err) return res.status(401).json({ message: 'Invalid token.' });

        // Token is valid
        req.user = decoded;
        next();
    });
}
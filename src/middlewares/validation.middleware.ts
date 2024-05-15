import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';

export const validateMiddleware = [
    check('firstName').notEmpty().withMessage('first name is required'),
    check('lastName').notEmpty().withMessage('last name is required'),
    check('email').isEmail().withMessage('Email is invalid'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    check('birthday').notEmpty().withMessage('date of birth is required'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

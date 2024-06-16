import { Request, Response, NextFunction } from "express";
import jwt, { JsonWebTokenError, VerifyErrors } from "jsonwebtoken";
import * as auth from "../../../../config/auth";

export const verifyAuthentication = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.cookies) {
        return res.status(401).json({error: "missing credentials"});
    } 
    
    const targetCookie = req.cookies.F6WEB;

    if (targetCookie) {
        const token = targetCookie.split("=")[1];

        try {
            jwt.verify(token, auth.default.secret);
            return next();
        } catch (error: any) {
            return res.status(401).json({ error: error.message });
        }
    }

    return res.status(401).json({ error: "jwt is missing" });
}
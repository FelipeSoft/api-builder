import 'module-alias/register';
import { verifyAuthentication } from './middlewares/verifyAuthentication';
import express, { Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
import routes from './api/v1';
import { TokenExpiredError } from 'jsonwebtoken';
import { getErrorHandler } from '@shared/strategies/errors';
import "@shared/infrastructure/mongoose/connection";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(routes);

app.use((err: Error, req: Request, res: Response) => {
    if (err instanceof TokenExpiredError) {
        return res.status(401).json({
            error: err.message,
        });
    }
    
    const errorHandler = getErrorHandler(err);
    const { status, message } = errorHandler.handleError(err);
    return res.status(status).json({ error: message });    
});

export default app;


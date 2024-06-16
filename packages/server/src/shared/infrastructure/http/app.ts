import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import v1 from './api/v1';
import cookieParser from "cookie-parser";
import { verifyAuthentication } from './middlewares/verifyAuthentication';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));
app.use(v1);

export default app;


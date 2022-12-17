import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        })
    } else {
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
    }
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
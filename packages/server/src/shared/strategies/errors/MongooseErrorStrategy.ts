import { ErrorHandlerStrategy } from "@shared/core/ErrorHandlerStrategy";
import { NotFoundError } from "@shared/errors/NotFoundError";
import { MongooseError } from "mongoose";

export class MongooseErrorStrategy implements ErrorHandlerStrategy {
    handleError(error: MongooseError): { status: number, message: string } {
        if (error.message.includes("timeout")) {
            return { status: 401, message: "cannot found a user with provided email" };
        }
        return { status: 500, message: error.message };
    }
}
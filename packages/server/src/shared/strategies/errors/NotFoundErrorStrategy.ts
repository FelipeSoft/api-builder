import { ErrorHandlerStrategy } from "@shared/core/ErrorHandlerStrategy";
import { NotFoundError } from "@shared/errors/NotFoundError";

export class NotFoundErrorStrategy implements ErrorHandlerStrategy {
    handleError(error: NotFoundError): { status: number, message: string } {
        return { status: 404, message: error.message };
    }
}
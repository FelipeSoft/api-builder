import { ErrorHandlerStrategy } from "@shared/core/ErrorHandlerStrategy";
import { NotFoundError } from "@shared/errors/NotFoundError";
import { UnauthorizedError } from "@shared/errors/UnauthorizedError";

export class UnauthorizedErrorStrategy implements ErrorHandlerStrategy {
    handleError(error: UnauthorizedError): { status: number, message: string } {
        return { status: 401, message: error.message };
    }
}
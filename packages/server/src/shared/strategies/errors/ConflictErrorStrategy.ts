import { ErrorHandlerStrategy } from "@shared/core/ErrorHandlerStrategy";
import { ConflictError } from "@shared/errors/ConflictError";

export class ConflictErrorStrategy implements ErrorHandlerStrategy {
    handleError(error: ConflictError): { status: number, message: string } {
        return { status: 409, message: error.message };
    }
}
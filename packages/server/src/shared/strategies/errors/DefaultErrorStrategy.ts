import { ErrorHandlerStrategy } from "@shared/core/ErrorHandlerStrategy";

export class DefaultErrorStrategy implements ErrorHandlerStrategy {
    handleError(error: Error): { status: number, message: string } {
        return { status: 500, message: error.message };
    }
}
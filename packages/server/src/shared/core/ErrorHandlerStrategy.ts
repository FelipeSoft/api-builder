export interface ErrorHandlerStrategy {
    handleError(error: Error): { status: number, message: string };
}
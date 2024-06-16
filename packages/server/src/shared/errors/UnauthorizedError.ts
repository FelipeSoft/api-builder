export class UnauthorizedError extends Error {
    public constructor (
        message: string
    ) {
        super(message);
    }
}
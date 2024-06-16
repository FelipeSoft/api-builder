export class ConflictError extends Error {
    public constructor (
        message: string
    ) {
        super(message);
    }
}
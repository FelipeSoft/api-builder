import { ErrorHandlerStrategy } from "@shared/core/ErrorHandlerStrategy";
import { DefaultErrorStrategy } from "./DefaultErrorStrategy";
import { MongooseErrorStrategy } from "./MongooseErrorStrategy";
import { UnauthorizedErrorStrategy } from "./UnauthorizedErrorStrategy";
import { NotFoundErrorStrategy } from "./NotFoundErrorStrategy";

export const errorHandlerStrategies: Record<string, ErrorHandlerStrategy> = {
    'NotFoundError': new NotFoundErrorStrategy(),
    'UnauthorizedError': new UnauthorizedErrorStrategy(),
    'MongooseError': new MongooseErrorStrategy(),
    'DefaultError': new DefaultErrorStrategy()
};

export function getErrorHandler(error: Error): ErrorHandlerStrategy {
    console.log("Eita: " + error);
    const strategyName = error.constructor.name;
    return errorHandlerStrategies[strategyName] || errorHandlerStrategies['DefaultError'];
}
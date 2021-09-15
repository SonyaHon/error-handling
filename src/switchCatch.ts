export function caseError<T extends Error, R>(Constructor: new () => T, handler: (error: T) => R): {Constructor: new () => T, handler: (error: T) => R} {
    return {
        Constructor,
        handler
    }
}

export function switchCatch<T extends Error, H extends ReturnType<typeof caseError>[]>(error: T, ...handlers: H): ReturnType<H[number]['handler']> {
    for(const handler of handlers) {
        if (error instanceof handler.Constructor) {
            return handler.handler(error) as any;
        }
    }
    throw error;
}

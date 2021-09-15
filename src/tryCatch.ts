import {ThrowableExecutor} from "./common";
import {caseError, switchCatch} from "./switchCatch";

export function tryCatch<T, H extends ReturnType<typeof caseError>[]>(executor: ThrowableExecutor<T>, ...handlers: H): T | ReturnType<H[number]['handler']> {
    try {
       return executor();
    } catch (error: any)  {
        return switchCatch(error, ...handlers);
    }
}

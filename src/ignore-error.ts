import {ThrowableExecutor} from "./common";


export function ignoreError<T>(executor: ThrowableExecutor<T>, defaultValue?: T): T {
    try {
        return executor();
    } catch (error) {
        return defaultValue as T;
    }
}

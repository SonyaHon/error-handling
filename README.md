## Description
Utility functions for error handling. 

## Installation

```bash
    $ npm install error-handling
```

## Usage

```typescript
import {ignoreError, switchCatch, tryCatch, caseError} from "error-handling";

// Returns the result of invocation. 
// If error has been thrown, returns undefined.
const result = ignoreError(() => someFunctionThatMayThrow());
// Or default value
const result2 = ignoreError(() => someFunctionThatMayThrow(), 42);


class Error1 extends Error { ... }
class Error2 extends Error { ... }

try {
    const value = functionThatThrowsSeveralErrors();
} catch (error) {
    // If catched error is hanlded by one of cases, its corresponding handler
    // will be called. If error is not handled by switchCatch it will be
    // thrown again
    const result = switchCatch(error,
        caseError(Error1, (e: Error1) => 20),
        caseError(Error2, (e: Error2) => 20),
    );
}

// Same as above but wraps the invocation with try/catch automatically
const value = tryCatch(() => functionThatThrowsSeveralErrors(),
    caseError(Error1, (e: Error1) => 20),
    caseError(Error2, (e: Error2) => 20),
);
```

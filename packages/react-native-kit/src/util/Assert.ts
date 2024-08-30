import { isTestEnvironment } from './EnvironmentUtil';
import { is } from './is';

export function tAssert(
  condition: (boolean | undefined | null | any) | (() => boolean | undefined | null | any),
  message?: string,
) {
  // run code even if in DEV
  // e.g.) assert(getNextProblem()) should be executed in production  too
  const result = is.function(condition) ? condition() : condition;
  if (!result) {
    tAssertFailure(message);
  }
}
export function tAssertFailure(
  message: string = __DEV__
    ? 'Assertion Failed in Debug Mode'
    : "Assertion Failed in Production. It doesn't affect app functionality",
) {
  if (__DEV__ && !isTestEnvironment()) {
    throw new DebugAssertError(message);
  }
}

class DebugAssertError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DebugAssertError';
    // this will ensure the stack trace includes the name of this class
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

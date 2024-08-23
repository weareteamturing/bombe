import { Platform } from 'react-native';

type Falsy = undefined | null | 0 | false | '';
type Func = (...args: any[]) => any;

const isType = {
  number: (candidate: any): candidate is number => typeof candidate === 'number' && !isNaN(candidate),
  string: (candidate: any): candidate is string => typeof candidate === 'string',
  integerString: (candidate: any): candidate is string =>
    is.notEmptyString(candidate) && is.number(Number(candidate)) && /^-?\d+$/.test(candidate),
  numberString: (candidate: any): candidate is string =>
    is.notEmptyString(candidate) && is.number(Number(candidate)) && /^-?\d+(\.\d+)?$/.test(candidate),
  null: (candidate: any): candidate is null => candidate === null,
  undefined: (candidate: any): candidate is undefined => candidate === undefined,
  nullOrUndefined: (candidate: any): candidate is undefined | null => candidate === undefined || candidate === null,
  falsy: <T>(candidate: T | Falsy): candidate is Falsy => !candidate,
  truthy: <T>(candidate: T | Falsy): candidate is T => !!candidate,
  function: <T extends Func, R>(candidate: T | R): candidate is T => typeof candidate === 'function',
  object: (candidate: any): candidate is Record<string, unknown> => typeof candidate === 'object' && candidate !== null,
  plainObject: (candidate: any): candidate is Record<string, unknown> => isPlainObject(candidate),
  array: <T>(candidate: any): candidate is T[] => Array.isArray(candidate),
  boolean: (candidate: any): candidate is boolean => typeof candidate === 'boolean',
  promise: <T>(p: Promise<T> | any): p is Promise<T> => {
    if (p !== null && typeof p === 'object' && typeof p.then === 'function' && typeof p.catch === 'function') {
      return true;
    }

    return false;
  },
};

const isCheck = {
  notEmptyString: (candidate: any): candidate is string => isType.string(candidate) && candidate.length > 0,
  emptyString: (candidate: any): candidate is string => isType.string(candidate) && candidate.length === 0,
  emptyArray: (candidate: any): boolean => isType.array(candidate) && candidate.length === 0,
  notEmptyArray: <T>(candidate: any): candidate is T[] => isType.array(candidate) && candidate.length > 0,
};

const isPlatform = {
  iOS: (): boolean => Platform.OS === 'ios',
  android: (): boolean => Platform.OS === 'android',
};

/**
 * check any varaible is an javascript plain object
 *
 * [isPlainObject.js](https://github.com/lodash/lodash/blob/master/isPlainObject.js)
 * @param value
 */
function isPlainObject(value: any): value is object {
  if (!value || !isObject(value)) {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  let proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;

  function isObject(any: any): any is object {
    return typeof any === 'object';
  }
}

const is = {
  ...isType,
  ...isCheck,
  ...isPlatform,
};

export default is;

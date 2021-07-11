/* eslint-disable @typescript-eslint/no-explicit-any */

type AnyMethod = (...args: any[]) => any;

export const memoize = (method: AnyMethod): AnyMethod => {
  const cache = {};

  return async (...args: any[]) => {
    const argsString = JSON.stringify(args);
    cache[argsString] = cache[argsString] || (await method(...args));
    return cache[argsString];
  };
};

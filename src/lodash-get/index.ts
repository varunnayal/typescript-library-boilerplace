export interface PropertyObject {
  [key: string]: PropertyObject | any;
}

/**
 * Mimic lodash `get` function.
 *
 * ```js
 * const obj = { a: { b: { c: 12 }, c: { c: 1 } } };
 * console.log('1: ', get(obj, ['a', 'b', 'c']), ' = 12?');
 * console.log('2: ', get(obj, 'a.c.c'), ' = 1?');
 * console.log('3: ', get(obj, ['b', 'c', 'c']), ' =null?');
 * ```
 *
 * @param a
 * @param paths
 */
export const get = (source: PropertyObject, paths: string[] | string): PropertyObject | any => {
  let pathList: string[];
  if (typeof paths === 'string') {
    pathList = paths.split('.');
  } else {
    pathList = paths;
  }
  if (source == null || pathList.length === 0) {
    return source;
  }
  return get(source?.[pathList[0]] ?? null, pathList.slice(1));
};

export default {
  get,
};

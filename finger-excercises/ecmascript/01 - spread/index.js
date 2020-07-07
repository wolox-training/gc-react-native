import { isArray } from './utils';

export function min(first, ...args) {
  if (first && isArray(first)) {
    return Math.min(...[...first, ...args]);
  }
  return first ? Math.min(...[first, ...args]) : first;
}

export function copy(objToCopy) {
  return isArray(objToCopy) ? [...objToCopy] : Object.assign({}, objToCopy);
}

export const reverseMerge = (firstArray, secondArray) => [...secondArray, ...firstArray];

export const filterAttribs = (objToFilter) =>
  Object.keys(objToFilter)
    .filter(key => key !== 'a' && key !== 'b')
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = objToFilter[key];
      return obj;
    }, {});

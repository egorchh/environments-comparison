"use strict"
/**
 * @param {number} keysAmount 
 */
export function generateRandomObject(keysAmount) {
    return new Array(keysAmount)
    .fill()
    .map(Math.random)
    .reduce((prev, curr) => {
      prev[curr] = Math.random();
      return prev;
    }, {});
}
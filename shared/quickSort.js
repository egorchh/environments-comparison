"use strict"
export function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
    var pivot = array[0];
    
    var left = []; 
    var right = [];
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
    return quickSort(left).concat(pivot, quickSort(right));
};
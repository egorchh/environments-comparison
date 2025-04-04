import { bench } from '../bench.js';
import { quickSort } from '../scenarios/quickSort.js';
import { generateRandomArray } from '../helpers/generateRandomArray.js';

await bench(quickSort, generateRandomArray(10000));

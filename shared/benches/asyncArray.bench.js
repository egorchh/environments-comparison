import { bench } from '../bench.js';
import { asyncArray } from '../scenarios/asyncArray.js';

await bench(asyncArray, 1_000_000);

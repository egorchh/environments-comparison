import { bench } from '../bench.js';
import { isPrime } from '../scenarios/isPrime.js';

await bench(isPrime, 5600748293801);
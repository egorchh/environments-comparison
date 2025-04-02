"use strict"
import { bench } from './bench.js'
import { asyncArray } from './asyncArray.js'

await bench(asyncArray, 1_000_000)

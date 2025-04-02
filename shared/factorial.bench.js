"use strict"
import { factorial } from './factorial.js'
import { bench } from './bench.js'

await bench(factorial, 1000)

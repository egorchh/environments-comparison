"use strict"
import { isPrime } from './isPrime.js'
import { bench } from './bench.js'

await bench(isPrime, 5600748293801)
//900719925477227
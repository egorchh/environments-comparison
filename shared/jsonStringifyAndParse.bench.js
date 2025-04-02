"use strict"
import { jsonStringifyAndParse } from './jsonStringifyAndParse.js'
import { bench } from './bench.js'
import { generateRandomObject } from "./helpers/generateRandomObject.js";

await bench(jsonStringifyAndParse, generateRandomObject(10000))
"use strict";
import { bench } from "./bench.js";
import { generateRandomObject } from "./helpers/generateRandomObject.js";

await bench(Object.assign, {}, generateRandomObject(10000), generateRandomObject(10000));

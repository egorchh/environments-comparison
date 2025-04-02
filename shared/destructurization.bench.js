"use strict";
import { bench } from "./bench.js";
import { destructurization } from "./destructurization.js";
import { generateRandomObject } from "./helpers/generateRandomObject.js";

await bench(destructurization, generateRandomObject(10000), generateRandomObject(10000));

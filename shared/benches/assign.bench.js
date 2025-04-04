import { bench } from "../bench.js";
import { assign } from "../scenarios/assign.js";
import { generateRandomObject } from "../helpers/generateRandomObject.js";

await bench(assign, {}, generateRandomObject(10_000), generateRandomObject(10_000));

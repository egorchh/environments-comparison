import { bench } from "../bench.js";
import { jsonStringifyAndParse } from "../scenarios/jsonStringifyAndParse.js";
import { generateRandomObject } from "../helpers/generateRandomObject.js";

await bench(jsonStringifyAndParse, generateRandomObject(10000));
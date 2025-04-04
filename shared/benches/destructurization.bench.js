import { bench } from "../bench.js";
import { destructurization } from "../scenarios/destructurization.js";
import { generateRandomObject } from "../helpers/generateRandomObject.js";

await bench(destructurization, generateRandomObject(10_000), generateRandomObject(10_000));

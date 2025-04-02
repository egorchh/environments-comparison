"use strict"
import { appendFile } from 'node:fs'

/**
 * 
 * @param {function} func 
 * @param {any} args 
 */
export async function bench(func, ...args) {
    performance.mark('start')
    await func(...args)
    performance.mark('end')
    const measure = performance.measure('Measurement', 'start', 'end')
    appendFile(`results/${func.name}.csv`, measure.duration.toString() + '\r\n', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
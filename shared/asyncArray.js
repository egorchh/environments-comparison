"use strict"
export async function asyncArray(n) {
    for (let i = 0; i <= n; i++) {
        await new Promise((resolve, reject) => resolve());
    }
};
"use strict"
export function factorial(n) {
    if (n < 0) { return; }
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
};
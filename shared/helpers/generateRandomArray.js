export function generateRandomArray(length, min = 0, max = 100) {
    const array = [];
    
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    
    return array;
};
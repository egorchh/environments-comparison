export function jsonStringifyAndParse(object) {
    return JSON.parse(JSON.stringify(object));
};
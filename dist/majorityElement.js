"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let majorityElement = function majorityElement(arr) {
    let limit = arr.length / 2;
    let seen = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            seen.set(arr[i], seen.get(arr[i]) + 1);
        }
        else {
            seen.set(arr[i], 1);
        }
        if (seen.get(arr[i]) > limit) {
            return arr[i];
        }
    }
};
exports.default = majorityElement;

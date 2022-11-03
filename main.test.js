// import {
//     firstAndLast
// } from './main.js';

import { expect, test } from '@jest/globals';
import { firstAndLast, equipmentBag, removeLastItem } from './main.js';
//👉 Write your tests below here:

// 1. First and last letter adding function
// test("Testing our firstAndLast function", () => {
//     const actual = firstAndLast("yes");
//     const expected = "helloyesgoodbye";

//     expect(actual).toBe(expected);
// })

test("Testing our firstAndLast function", () => {
    const actual = firstAndLast("yes");
    const expected = "1yes2";

    expect(actual).toBe(expected);
})

// 2. Equipment function test
test("Testing the equipmentBag function", () => {
    const actual = equipmentBag("Rope, Blade, Cloak, Potion of Invisability");
    const expected = ["Rope", "Blade", "Cloak", "Potion of Invisability"];

    expect(actual).toStrictEqual(expected);
})

// test("Testing the equipmentBag function", () => {
//     const actual = equipmentBag("1, 2, 3, 4");
//     const expected = ["1", "2", "3", "4"];

//     expect(actual).toStrictEqual(expected);
// })


// 3. Remove last item in backpack test
test("Testing the removeLastItem function", () => {
    const actual = removeLastItem(["Rope", "Blade", "Wabbajack", "Cat"]);
    const expected = ["Rope", "Blade", "Wabbajack"];

    expect(actual).toStrictEqual(expected);
})
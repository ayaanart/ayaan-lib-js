import { test } from "../../testing-tool/test.js";
import { assertEqual } from "../../testing-tool/assertEqual.js";
import { assertThrow } from "../../testing-tool/assertThrow.js";
import { adjustSeparation } from "../../math/adjustSeparation.js";
console.log("Testing adjustSeparation()"); 

// Testing Happy Cases ----------------------------

test("Negative delta", () => {
	assertEqual(adjustSeparation(20, 10, -4), 16);
});

test("Positive delta", () => {
	assertEqual(adjustSeparation(-20, -10, 5), -25);
});

test("Passing fixed value", () => {
	assertEqual(adjustSeparation(10, 15, -10), 20);
});

test("Equal values", () => {
	assertEqual(adjustSeparation(10, 10, 101), 10);
});

test("delta of 0", () => {
	assertEqual(adjustSeparation(10, 15, 0), 10);
});

test("Decimals", () => {
	assertEqual(adjustSeparation(1.5, 1, 0.25), 1.75);
});

// Testing Upset Cases ----------------------------
test("TypeError for string", () => {
	assertThrow(() => adjustSeparation("5", 10, 1), TypeError, ["movingValue", "string"]);
});

test("TypeError for undefined", () => {
	assertThrow(() => adjustSeparation(10, 0, undefined), TypeError, ["delta", "undefined"]);
});

test("RangeError for NaN", () => {
	assertThrow(() => adjustSeparation(5, NaN, 20), RangeError, ["fixedValue", "NaN"]);
});

test("RangeError for Infinity", () => {
	assertThrow(() => adjustSeparation(5, 10, Infinity), RangeError, ["delta", "Infinity"]);
});

import { test } from "../../testing-tool/test.js";
import { assertEqual } from "../../testing-tool/assertEqual.js";
import { assertThrow } from "../../testing-tool/assertThrow.js";
import { reflect } from "../../math/reflect.js";
console.log("Testing reflect()");

// Happy cases ---------------------
test("Going higher than bound", () => {
	assertEqual(reflect(5, 15, 20), 30);
});

test("Going below bound", () => {
	assertEqual(reflect(25, 15, 20), 10);
});

test("All negatives", () => {
	assertEqual(reflect(-16, -30, -15), -29);
});

test("Positive and negatives", () => {
	assertEqual(reflect(50, -20, 40), -30);
});

test("Default bound", () => {
	assertEqual(reflect(0.75), 0.25);
});

test("bound1 > bound2", () => {
	assertEqual(reflect(11, 20, 10), 19);
});

// Upset cases ----------------------
test("TypeError for string", () => {
	assertThrow(() => reflect("4", 0, 10), TypeError, ["4",  "valueToReflect"]);
});

test("RangeError for NaN", () => {
	assertThrow(() => reflect(4, NaN, 10), RangeError, ["NaN", "bound1"]);
});

test("RangeError for -Infinity on bound2", () => {
	assertThrow(() => reflect(4, 0, -Infinity), RangeError, ["-Infinity", "bound2"]);
});

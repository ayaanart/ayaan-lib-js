import { test } from "../../testing-tool/test.js";
import { assertThrow } from "../../testing-tool/assertThrow.js";
import { throwNonFiniteNumber } from "../../errorThrower/throwNonFiniteNumber.js";
console.log("Testing throwNonFiniteNumber()");

test("TypeError for string", () => {
	assertThrow(() => throwNonFiniteNumber({var1: "9", b: 58008}, "calculator"), TypeError, ["9", "var1", "string", "calculator"]);
});

test("RangeError for Infinity", () => {
	assertThrow(() => throwNonFiniteNumber({friend: 89, otherFriend: 99, me: Infinity}, "level of coolness"), RangeError, ["Infinity", "me", "level of coolness"]);
});

test("Error for only finite numbers", () => {
	assertThrow(() => throwNonFiniteNumber({a: 2, b: 3, ab: 6}, "isPrime"), Error, ["isPrime", "finite numbers", "a=2, b=3, ab=6"]);
});

test("Reports first invalid arg", () => {
	assertThrow(() => throwNonFiniteNumber({var2: NaN, b: "5"}, "randomFn"), RangeError, "var2");
});

test("Empty Object", () => {
	assertThrow(() => throwNonFiniteNumber({}, "nothingFn"), Error, ["\"\"", "finite numbers"]);
});

/**
 * Throw an error if the actual value of an expression does not equal the expected value.
 * Uses !== to compare. Be careful of edge cases like NaN !== NaN or objects and arrays being compared by reference.
 * @param {*} actual The actual output of the expression.
 * @param {*} expected The expected output of the expression.
 * @throws {Error} If actual !== expected
 * @example
 * assertEqual(Math.min(5, 4), 4); // does not throw
 * assertEqual([5, 2].join(","), "5, 2"); // does throw.
 */
export function assertEqual(actual, expected) {
	if (actual !== expected) {
		throw new Error(`Expected ${String(expected)} (${typeof expected}). Got ${String(actual)} (${typeof actual})`);
	}
}

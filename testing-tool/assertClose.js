/**
 * Throws an Error if the actual value of an expression is not within a certain tolerance of the expected value.
 * An expected value of 5 and a tolerance of 1 lets any value between 4 and 6 (inclusive) pass.
 * @param {number} actual The actual value of the expression.
 * @param {number} expected The expected value of the expression.
 * @param {number} [tolerance=1e-9] The maximum allowed difference between actual and expected.
 * @throws {Error} If actual is not within tolerance of expected.
 * @example
 * assertClose(0.1 + 0.2, 0.3); // does not throw (default tolerance of 1e-9)
 * assertClose(5.2, 5, 0.1); // does throw
 */
export function assertClose(actual, expected, tolerance = 1e-9) {
	if (!(Math.abs(actual - expected) <= tolerance)) {
		throw new Error(`Expected ${expected} ± ${tolerance}. Got ${actual}`);
	}
}

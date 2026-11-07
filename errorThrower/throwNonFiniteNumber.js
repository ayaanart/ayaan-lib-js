/**
 * Throws a RangeError or a TypeError for the first nonFiniteNumber in an object, assuming the object is a list of args with at least 1 error.
 * @param {object} args The args of the function
 * @param {string} fnName The function name
 * @throws {TypeError} For non-numbers
 * @throws {RangeError} For non-finite numbers
 * @throws {Error} If every argument is a finite number. This means the caller has a bug.
 */
export function throwNonFiniteNumber(args, fnName) {
	for (const [name, value] of Object.entries(args)) {
		if (typeof value !== "number") {
			throw new TypeError(`${fnName}: ${name} must be a number. Got "${String(value)}" Type: ${typeof value}`);
		}
		if (!Number.isFinite(value)) {
			throw new RangeError(`${fnName}: ${name} must be a finite number. Got ${value}`);
		}
	}
	const argsDisplayed = Object.entries(args).map(([name, value]) => `${name}=${value}`).join(", ");
	throw new Error(`throwNonFiniteNumber: Called by ${fnName} but all args are finite numbers: "${argsDisplayed}"`);
}

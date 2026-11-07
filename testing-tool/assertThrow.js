/**
 * Throws an Error if fn does not throw an error of the correct type, or if the error message is missing any required text.
 * @param {Function} fn The function expected to throw.
 * @param {Function} ErrorType The error type fn should throw, like TypeError or RangeError.
 * @param {string|string[]} [requiredText] Text the error message must contain. Use an array to require multiple pieces of text.
 * @throws {Error} If fn does not throw, throws the wrong type, or the message is missing required text.
 * @example
 * assertThrow(() => adjustSeparation(5, NaN, 1), RangeError, ["fixedValue", "finite"]); // does not throw
 */
export function assertThrow(fn, ErrorType, requiredText) {
	try {
		fn();
	} catch (error) {
		if (!(error instanceof ErrorType)) {
			throw new Error(`Expected ${ErrorType.name}. Got ${String(error)}`);
		}
		if (requiredText === undefined) {
			return;
		}
		const requiredTexts = Array.isArray(requiredText) ? requiredText : [requiredText];
		for (const text of requiredTexts) {
			if (!error.message.includes(text)) {
				throw new Error(`Expected ${ErrorType.name} message to contain "${text}". Got "${error.message}"`);
			}
		}
		return;
	}
	throw new Error(`Expected ${ErrorType.name} to be thrown. Nothing was thrown.`);
}

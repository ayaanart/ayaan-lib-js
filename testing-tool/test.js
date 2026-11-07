/**
 * Runs a test and logs whether it passed or failed.
 * The test fails if fn throws. Only supports sync tests, so async failures are not caught.
 * @param {string} name Name of the test.
 * @param {function} fn Test code containing the assertions.
 * @example
 * test("Adds two numbers", () => assertEqual(2+5, 5);); // logs "PASSED: Adds two numbers"
 */
export function test(name, fn) {
	try {
		fn();
		console.log(`%cPASSED: ${name}`, "color: #C800C8");
	} catch (error) {
		console.error(`FAILED: ${name}\n ${String(error)}`);
	}
}

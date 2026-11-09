let passedCount = 0;
let failedCount = 0;

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
		passedCount++;
		console.log(`%cPASSED: ${name}`, "color: #C800C8");
	} catch (error) {
		failedCount++;
		console.error(`FAILED: ${name}\n ${String(error)}`);
	}
}

/**
* Prints a summary of all tests run so far. Call it after every test file has run.
*/
export function printTestSummary() {
	const total = passedCount + failedCount;
	const result = failedCount > 0? "FAILED" : "PASSED";
	const summary = `TEST RESULT: ${result}\nPassed: ${passedCount}\nFailed: ${failedCount}\nTotal: ${total}`;
	
	if (result === "PASSED") {
	console.log(`%c${summary} `, "color: #39FF14");
	} else {
	console.error(summary);
	}
}

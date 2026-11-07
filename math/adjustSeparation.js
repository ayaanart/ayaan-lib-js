import { throwNonFiniteNumber } from "../errorThrower/throwNonFiniteNumber.js";
/**
 * Adjusts the separation of 2 values by moving 1 value and keeping the other value fixed.
 * If movingValue === fixedValue then it returns movingValue.
 * @param {number} movingValue Value that will be moved.
 * @param {number} fixedValue Value that is fixed and will not be moved.
 * @param {number} delta Amount of which the movingValue will be moved by and in which direction.
 * +delta moves away from the fixedValue, increasing separation.
 * -delta moves in the direction of the fixedValue and allows going past fixedValue.
 * @returns {number} The adjusted movingValue.
 * @throws {TypeError} For non-number.
 * @throws {RangeError} For non-finite number.
 * @example
 * adjustSeparation(20, 10, -4); // 16 (moved closer to 10)
 * adjustSeparation(-20, -10, 5); // -25 (moved away from -10)
 * adjustSeparation(10, 15, -10); // 20 (moved towards 15 and then passed it)
 * adjustSeparation(10, 10, 20); // 10 (movingValue === fixedValue then returns movingValue)
 */
export function adjustSeparation(movingValue, fixedValue, delta) {
	if (!Number.isFinite(movingValue) || !Number.isFinite(fixedValue) || !Number.isFinite(delta)) {
		throwNonFiniteNumber({movingValue, fixedValue, delta}, "adjustSeparation");
	}
	return movingValue + Math.sign(movingValue - fixedValue) * delta;
}

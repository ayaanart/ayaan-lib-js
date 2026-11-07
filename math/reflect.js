import { throwNonFiniteNumber } from "../errorThrower/throwNonFiniteNumber.js";
/**
 * Reflect a number over the mid-point of a range.
 * @param {number} movingValue The number that is reflected.
 * @param {number} [bound1=0] 1st bound of the range (convention to make this lower bound).
 * @param {number} [bound2=1] 2nd bound of the range (convention to make this higher bound).
 * @returns {number} Reflected number.
 * @throws {TypeError} If any parameters are not numbers.
 * @throws {RangeError} If any parameters are numbers but not finite numbers.
 * @example
 * reflect(3, 0, 10); // 7
 * reflect(0.75); // 0.25 (defaulted to range of 0-1)
 * reflect(2, 5, 10); // 13 (3 more than highest bound because movingValue was 3 less than lowest bound)
 * reflect(0.5); // 0.5 (already at midpoint)
 */
export function reflect(movingValue, bound1 = 0, bound2 = 1) {
	if (!Number.isFinite(movingValue) || !Number.isFinite(bound1) || !Number.isFinite(bound2)) {
		throwNonFiniteNumber({movingValue, bound1, bound2}, "reflect");
	}
	return -1 * movingValue + bound1 + bound2;
}

/**
 * Rounds the given number to the specified amount of digits.
 * @param num - the number to round
 * @param digits - the amount of digits the number are round to
 * @returns the round number
 *
 * @example
 * ```ts
 * const num = 1.23456789;
 * console.log(roundTo(num, 2)); // 1.23
 * console.log(roundTo(num, 5)); // 1.23456
 * console.log(roundTo(num, 7)); // 1.2345678
 * ```
 */
export function roundTo(num: number, digits: number): number {
	return Math.round(num * 10 ** digits) / 10 ** digits;
}

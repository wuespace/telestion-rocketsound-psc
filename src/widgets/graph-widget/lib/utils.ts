/**
 * Checks if the given variable or definable is a valid object.
 * @param obj - the variable or definable to check for valid object
 *
 * @example
 * # Valid object
 * ```ts
 * const myObj = {};
 * if (isObj(myObj)) {
 * 	console.log('It\'s an object!'); // 'It's an object!'
 * }
 * ```
 *
 * # Not a valid object
 * ```ts
 * const myValue = 3.14;
 * if (isObj(myValue)) {
 * 	...
 * } else {
 * 	console.log('It\'s not an object!'); // 'It's not an object!'
 * }
 * ```
 */
export function isObj(obj: unknown): obj is Record<string, unknown> {
	return obj !== null && typeof obj === 'object';
}

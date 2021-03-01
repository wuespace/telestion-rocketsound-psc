import { JsonSerializable } from '@wuespace/telestion-client-types';
import { isObj } from '../../lib';

/**
 * Extracts a deeply nested value from a given object
 * using the specified key string.
 *
 * The key string must have a special accessor format,
 * where `.` and `[var]` are access operators
 * to get a property value from an object or array.
 *
 * @param obj - the deeply nested object
 * @param key - the key string to access the deeply nested value
 * @returns the value of the specified key string in the object.
 *
 * @throws TypeError - when the key string cannot be found
 * in the object structure
 * @throws TypeError - when the selected path in the object does not point
 * to a numeric value
 *
 * @example
 * ```ts
 * const obj = {
 * 	acc: [
 * 		{
 * 			x: 0,
 * 			y: 1,
 * 			z: 2
 * 		},
 * 		{
 * 			x: 3,
 * 			y: 4,
 * 			z: 5
 * 		}
 * 	],
 * 	gyro: {
 * 		x: 6,
 * 		y: 7,
 * 		z: 8
 * 	},
 * 	temp: 18.7
 * };
 *
 * console.log(extractValue(obj, 'acc[0].x')); // 0
 * console.log(extractValue(obj, 'acc[0].y')); // 1
 * console.log(extractValue(obj, 'gyro.z')); // 8
 * console.log(extractValue(obj, 'temp')); // 18.7
 * ```
 */
export function extractValue(obj: JsonSerializable, key: string): number {
	// replace [$1] with .$1 and split on .
	const accessors = key.replace(/\[(\w+)\]/g, '.$1').split('.');

	let reduce = obj;

	for (let i = 0; i < accessors.length; i++) {
		if (!isObj(reduce)) {
			throw new TypeError(
				`Invalid message body received. (iteration: ${i}, accessor: ${
					accessors[i]
				}, expected: object, received: ${JSON.stringify(reduce)}`
			);
		}

		const value = reduce[accessors[i]];

		if (typeof value === 'undefined') {
			throw new TypeError(`Accessor ${accessors[i]} is undefined.`);
		}

		reduce = value;
	}

	if (typeof reduce !== 'number') {
		throw new TypeError(
			`Invalid value received. (access expected: number, received: ${JSON.stringify(
				reduce
			)}`
		);
	}

	return reduce;
}

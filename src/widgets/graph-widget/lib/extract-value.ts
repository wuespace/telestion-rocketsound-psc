import { JsonSerializable } from '@wuespace/telestion-client-types';
import { isObj } from './utils';

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

		reduce = reduce[accessors[i]];
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

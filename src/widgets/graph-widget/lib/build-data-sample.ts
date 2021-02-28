import { ReceiveMessage } from '@wuespace/telestion-client-types';
import { DataSample, DataSetDescriptor } from '../model';
import { isObj } from './utils';

export function buildDataSample(
	descriptors: DataSetDescriptor[],
	message: ReceiveMessage | null,
	time: number
): DataSample {
	return descriptors.reduce(
		(acc, descriptor) => {
			if (message) {
				if (!isObj(message.body)) {
					throw new TypeError(
						`Invalid message body received. (expected: object, received: ${message.body})`
					);
				}

				const value = message.body[descriptor.key];

				if (typeof value !== 'number') {
					throw new TypeError(
						`Invalid value received. (expected: number, received: ${value}`
					);
				}

				acc[descriptor.key] = value;
			}

			return acc;
		},
		{ time } as DataSample
	);
}

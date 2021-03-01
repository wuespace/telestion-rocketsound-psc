import { ReceiveMessage } from '@wuespace/telestion-client-types';
import { DataSample, DataSetDescriptor } from '../model';
import { extractValue } from './extract-value';

export function buildDataSample(
	descriptors: DataSetDescriptor[],
	message: ReceiveMessage | null,
	time: number
): DataSample {
	return descriptors.reduce(
		(acc, descriptor) => {
			if (message) {
				acc[descriptor.key] = extractValue(message.body, descriptor.key);
			}

			return acc;
		},
		{ time } as DataSample
	);
}

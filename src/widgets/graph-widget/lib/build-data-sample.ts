import { ReceiveMessage } from '@wuespace/telestion-client-types';
import { DataSample, DataSetDescriptor } from '../model';
import { extractValue } from './extract-value';

/**
 * Builds a data sample for a chart component.
 * @param descriptors - the data set descriptors to apply on the message body
 * @param message - the received message from the backend
 * @param time - the time tag of the data sample
 * @returns a new data sample with the extracted data from the message
 * via the descriptors
 *
 * @see {@link extractValue}
 */
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

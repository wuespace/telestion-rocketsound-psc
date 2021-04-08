import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
	Callback,
	ChannelAddress,
	JsonSerializable
} from '@wuespace/telestion-client-types';

import { ChartConnection, DataSample } from '../model';
import { buildDataSample } from '../lib';

type SetData = Dispatch<SetStateAction<DataSample[]>>;
export type ChartCallback = readonly [ChannelAddress, Callback];

/**
 * Builds the callbacks which are typically registered on the event bus
 * to receive messages, parse them and store them in the data state.
 *
 * @param connections - the connections to register to
 * and descriptors for each connection
 * @param setData - a function to update the data sample state
 * @param maxDataSamples - the maximum amount of data samples to hold
 * before removing the old values from the data state
 * @returns all callbacks that should be registered on the event bus
 * to receive message, parse them and store them in the data state
 *
 * @see {@link ChartConnection}
 */
export function useCallbacks(
	connections: ChartConnection[],
	setData: SetData,
	maxDataSamples: number
): ChartCallback[] {
	const [initialDate] = useState(new Date());
	const [error, setError] = useState<Error>();

	const callbacks = useMemo(
		() =>
			connections.map(({ channel, descriptors }) => {
				const callback = (content: JsonSerializable) => {
					try {
						// build current time diff from start
						const time = (new Date().getTime() - initialDate.getTime()) / 1000;
						const dataSample = buildDataSample(descriptors, content, time);
						console.log('Data Sample:', dataSample);
						setData(prevState => [
							...prevState.slice(-maxDataSamples),
							dataSample
						]);
					} catch (err) {
						setError(err);
					}
				};

				return [channel, callback] as ChartCallback;
			}),
		[connections, initialDate, maxDataSamples, setData]
	);

	if (error) throw error;

	return callbacks;
}

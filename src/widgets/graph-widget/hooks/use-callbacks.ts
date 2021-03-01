import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
	Callback,
	ChannelAddress,
	ReceiveMessage
} from '@wuespace/telestion-client-types';

import { ChartConnection, DataSample } from '../model';
import { buildDataSample } from '../lib/build-data-sample';

type SetData = Dispatch<SetStateAction<DataSample[]>>;
export type ChartCallback = readonly [ChannelAddress, Callback];

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
				const callback = (message: ReceiveMessage | null) => {
					try {
						// build current time diff from start
						const time = (new Date().getTime() - initialDate.getTime()) / 1000;
						const dataSample = buildDataSample(descriptors, message, time);
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

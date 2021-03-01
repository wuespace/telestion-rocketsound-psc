import { useEffect, useState } from 'react';
import { StateSelector } from 'zustand';
import { EventBusState, useEventBus } from '@wuespace/telestion-client-core';

import { ChartConnection, DataSample } from '../model';
import { useCallbacks } from './use-callbacks';

// event bus selector
const selector: StateSelector<
	EventBusState,
	EventBusState['eventBus']
> = state => state.eventBus;

export function useData(
	connections: ChartConnection[],
	maxDataSamples: number
) {
	const eventBus = useEventBus(selector);

	const [data, setData] = useState<DataSample[]>([]);
	const callbacks = useCallbacks(connections, setData, maxDataSamples);

	if (!eventBus) {
		throw new TypeError(
			'There is no eventbus instance to subscribe to. ' +
				'Please check if the eventbus was created and try again.'
		);
	}

	useEffect(() => {
		// register all callbacks
		callbacks.forEach(([channel, callback]) =>
			eventBus.registerHandler(channel, callback)
		);
		// unregister all callbacks
		return () =>
			callbacks.forEach(([channel, callback]) =>
				eventBus.unregisterHandler(channel, callback)
			);
	}, [callbacks, connections, eventBus]);

	return data;
}

import { useEffect, useState } from 'react';
import { StateSelector } from 'zustand';
import { EventBusState, useEventBus } from '@wuespace/telestion-client-core';

import { ChartConnection, DataSample } from '../model';
import { useCallbacks } from './use-callbacks';

// event bus selector
const selector: StateSelector<EventBusState, EventBusState['eventBus']> =
	state => state.eventBus;

/**
 * Holds the data samples for the chart component
 * and registers to the event bus to receive updates on the specified channels.
 *
 * @param connections - the connections to register to
 * and descriptors for each connection
 * @param maxDataSamples - the maximum amount of data samples to hold
 * before removing the old values from the data state
 * @returns the current data state for the chart component
 *
 * @see {@link ChartConnection}
 */
export function useData(
	connections: ChartConnection[],
	maxDataSamples: number
) {
	const eventBus = useEventBus(selector);

	const [data, setData] = useState<DataSample[]>([]);
	const callbacks = useCallbacks(connections, setData, maxDataSamples);

	useEffect(() => {
		if (eventBus) {
			// register all callbacks
			console.log('Register callbacks...');
			callbacks.forEach(([channel, callback]) =>
				eventBus.register(channel, callback)
			);
			// unregister all callbacks
			return () => {
				console.log('Unregister callbacks...');
				callbacks.forEach(([channel, callback]) =>
					eventBus.unregister(channel, callback)
				);
			};
		}
	}, [callbacks, connections, eventBus]);

	return data;
}

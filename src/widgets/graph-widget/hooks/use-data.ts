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

import { useChannelLatest } from '@wuespace/telestion-client-core';
import { LoadingIndicator } from '@wuespace/telestion-client-common';

import { FlightState } from '../../model/channels';
import { FlightStateMessage } from '../../model/messages';
import { State } from './state.model';
import { StateDisplay } from './StateDisplay';

const states: { [key: number]: State } = {
	0: {
		currentState: '-',
		nextState: '-',
		tagName: '-',
		isSpecial: false
	},
	1: {
		currentState: 'Preparation',
		nextState: 'Flying',
		tagName: 'Preflight',
		isSpecial: false //true = red border in tag, false = grey
	},
	2: {
		currentState: 'Flying',
		nextState: 'Apogee',
		tagName: 'Flight',
		isSpecial: true
	},
	3: {
		currentState: 'Apogee',
		nextState: 'Falling',
		tagName: 'Flight',
		isSpecial: true
	},
	4: {
		currentState: 'Landing',
		nextState: 'Landed',
		tagName: 'Flight',
		isSpecial: true
	},
	5: {
		currentState: 'Recovery',
		nextState: '-',
		tagName: 'Afterflight',
		isSpecial: false
	}
};

const fallbackState: State = states[0];

export function Widget() {
	const current = useChannelLatest<FlightStateMessage>(FlightState)?.result[0];

	return (
		<LoadingIndicator dependencies={[current]}>
			{() => (
				<StateDisplay state={states[current?.state || 0] || fallbackState} />
			)}
		</LoadingIndicator>
	);
}

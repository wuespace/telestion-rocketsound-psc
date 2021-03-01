import { StateDisplay } from './StateDisplay';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { LoadingIndicator } from '@wuespace/telestion-client-common';
import { FlightState } from '../../model/channels';
import { FlightStateMessage } from '../../model/messages/flight-state';
import { State } from './state.model';

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
		currentState: 'Falling',
		nextState: 'Landed',
		tagName: 'Flight',
		isSpecial: true
	},
	5: {
		currentState: 'Landed',
		nextState: '-',
		tagName: 'Afterflight',
		isSpecial: false
	}
};

const fallbackState: State = states[0]; // can be anything (displayed when nothing is arriving)

export function Widget() {
	const current = useChannelLatest<FlightStateMessage>(FlightState)?.result[0];
	//Received: record with an int corresponding to a state

	//just for initial testing: let i: number = 1;

	return (
		<LoadingIndicator dependencies={[current]} timeout={5000}>
			{() => (
				<StateDisplay state={states[current?.state || 0] || fallbackState} />
			)}
		</LoadingIndicator>
	);
}

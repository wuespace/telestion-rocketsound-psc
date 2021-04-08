import { useCallback, useState } from 'react';
import { useChannel } from '@wuespace/telestion-client-core';
import { ChannelAddress } from '@wuespace/telestion-client-types';

import { AmplitudeMessage } from '../../model/messages';

function buildNextState(
	prevState: number[],
	value: number,
	width: number
): number[] {
	// fill up
	if (prevState.length < Math.floor(width * 0.9)) {
		return [...prevState, value];
	}
	// throw out old data
	return [...prevState.slice(-1), value];
}

export function useAmplitudes(
	channel: ChannelAddress,
	width: number
): number[] {
	const [amplitudes, setAmplitudes] = useState<number[]>([]);
	const handler = useCallback(
		(data: AmplitudeMessage) => {
			const { amplitude } = data.result[0];
			setAmplitudes(prevState => buildNextState(prevState, amplitude, width));
		},
		[width]
	);
	useChannel<AmplitudeMessage>(channel, handler);

	return amplitudes;
}

import { useState, useEffect } from 'react';
import { View, Heading } from '@adobe/react-spectrum';
import { useChannelLatest } from '@wuespace/telestion-client-core';

import { Amplitude } from '../../model/channels';
import { Waveform } from './waveform';
import { AmplitudeMessage } from '../../model/messages/amplitude';

export function Widget() {
	const latestAmplitude = useChannelLatest<AmplitudeMessage>(Amplitude);
	const [amplitude, setAmplitude] = useState<number>(0);

	useEffect(() => {
		setAmplitude(
			latestAmplitude ? latestAmplitude.result[0].amplitude : amplitude
		);
	}, [amplitude, latestAmplitude]);

	return (
		<View padding="size-150">
			<Heading level={4}>Amplitude</Heading>
			<Waveform amplitude={amplitude} xLabel="Samples" yLabel="Amplitude" />
		</View>
	);
}

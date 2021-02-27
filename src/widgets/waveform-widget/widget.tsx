import { View, Heading } from '@adobe/react-spectrum';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { MONGODB_NEW } from '../../model/channels';
import { useState } from 'react';
import { Waveform } from './waveform';
import { useEffect } from 'react';
import { JsonSerializable } from '@wuespace/telestion-client-types';

// TODO: Move to model
interface DataMessage<T extends JsonSerializable> {
	[key: string]: JsonSerializable;
	dataType: string;
	result: T[];
	className: string;
}

// TODO: Move to model
interface Amplitude {
	[key: string]: JsonSerializable;
	amplitude: number;
	className: string;
}

export function Widget() {
	const latestAmplitude = useChannelLatest<DataMessage<Amplitude>>(
		MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.sound.Amplitude'
	);
	const [amplitude, setAmplitude] = useState<number>(0);

	useEffect(() => {
		setAmplitude(
			latestAmplitude ? latestAmplitude.result[0].amplitude : amplitude
		);
	}, [latestAmplitude]);

	return (
		<View padding="size-150">
			<Heading level={4}>Amplitude</Heading>
			<Waveform amplitude={amplitude} xLabel="Samples" yLabel="Amplitude" />
		</View>
	);
}

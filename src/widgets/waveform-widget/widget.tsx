import { View, Content, Heading } from '@adobe/react-spectrum';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { MONGODB_NEW } from '../../model/channels';
import { useState } from 'react';
import { Waveform } from './waveform';
import { useEffect } from 'react';
import { JsonSerializable } from '@wuespace/telestion-client-types';

interface DataMessage<T extends JsonSerializable> {
	[key: string]: JsonSerializable;
	dataType: string;
	result: T[];
	className: string;
}

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
		// TODO: remove interval and use amplitude data from latestData
		/*let interval = setInterval(() => {
			let newAmp = Math.random() * (Math.random() * 3) * 20;
			setAmplitude(newAmp);
		}, 166);
		*/
		setAmplitude(
			latestAmplitude ? latestAmplitude.result[0].amplitude : amplitude
		);
	}, [latestAmplitude]);

	return (
		<div>
			<View padding="size-150">
				<Heading level={4}>Signal 1</Heading>
				<Waveform amplitude={amplitude} />
			</View>
		</div>
	);
}

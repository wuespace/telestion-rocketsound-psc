import { useCallback, useState } from 'react';
import { useChannel } from '@wuespace/telestion-client-core';
import { ChannelAddress } from '@wuespace/telestion-client-types';
import { SpectrumData, SpectrumMessage } from '../../model/messages';

function buildNextState(
	prevState: SpectrumData[],
	value: SpectrumData,
	maxLength: number
): SpectrumData[] {
	// fill up
	if (prevState.length < maxLength) {
		return [...prevState, value];
	}
	// throw out old data
	return [...prevState.slice(-maxLength), value];
}

export function useSpectrum(
	channel: ChannelAddress,
	samples: number
): SpectrumData[] {
	const [spectrum, setSpectrum] = useState<SpectrumData[]>([]);
	const handler = useCallback(
		(data: SpectrumMessage) => {
			const spectrumData = data.result[0];
			setSpectrum(prevState =>
				buildNextState(prevState, spectrumData, samples)
			);
		},
		[samples]
	);
	useChannel<SpectrumMessage>(channel, handler);

	return spectrum;
}

import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export type AmplitudeClassName =
	'de.jvpichowski.rocketsound.messages.sound.Amplitude';

export interface AmplitudeData extends Record<string, JsonSerializable> {
	amplitude: number;
	freq1: number;
	freq2: number;
	className: AmplitudeClassName;
}

export type AmplitudeMessage = DataMessage<AmplitudeData, AmplitudeClassName>;

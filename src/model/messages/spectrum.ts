import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export type SpectrumClassName =
	'de.jvpichowski.rocketsound.messages.sound.Spectrum';

export interface SpectrumData extends Record<string, JsonSerializable> {
	min: number;
	max: number;
	data: number[];
	className: SpectrumClassName;
}

export type SpectrumMessage = DataMessage<SpectrumData, SpectrumClassName>;

import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export interface SpectrumData {
	[key: string]: JsonSerializable;
	min: number;
	max: number;
	data: number[];
}

export type SpectrumMessage = DataMessage<SpectrumData>;

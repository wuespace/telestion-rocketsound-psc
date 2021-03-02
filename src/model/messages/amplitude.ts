import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export interface AmplitudeData {
	[key: string]: JsonSerializable;
	amplitude: number;
	className: string;
}

export type AmplitudeMessage = DataMessage<AmplitudeData>;

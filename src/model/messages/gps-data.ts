import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

interface GpsDataData {
	[key: string]: JsonSerializable;
	satCount: number;
	fix: boolean;
	latitude: number;
	longitude: number;
	time: number;
	className: string;
}

export type GpsDataMessage = DataMessage<GpsDataData>;

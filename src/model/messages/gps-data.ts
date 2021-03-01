import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

interface GpsDataData {
	[key: string]: JsonSerializable;
	satCount: number;
	fix: number;
	north: number;
	east: number;
	time: number;
	className: string;
}

export type GpsDataMessage = DataMessage<GpsDataData>;

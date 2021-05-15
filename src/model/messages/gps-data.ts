import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export type GpsDataClassName =
	'de.jvpichowski.rocketsound.messages.base.GpsData';

export interface GpsDataData extends Record<string, JsonSerializable> {
	satCount: number;
	fix: boolean;
	latitude: number;
	longitude: number;
	time: number;
	className: GpsDataClassName;
}

export type GpsDataMessage = DataMessage<GpsDataData, GpsDataClassName>;

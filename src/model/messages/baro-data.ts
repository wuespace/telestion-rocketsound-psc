import { DataMessage } from '../channels';
import { JsonSerializable } from '@wuespace/telestion-client-types';

export interface PressureData extends Record<string, JsonSerializable> {
	pressure: number;
}

export interface TemperatureData extends Record<string, JsonSerializable> {
	temperature: number;
}

export interface AltitudeData extends Record<string, JsonSerializable> {
	altitude: number;
}

export interface BaroDataData extends Record<string, JsonSerializable> {
	press: PressureData;
	temp: TemperatureData;
	alt: AltitudeData;
}

export type BaroDataMessage = DataMessage<BaroDataData>;

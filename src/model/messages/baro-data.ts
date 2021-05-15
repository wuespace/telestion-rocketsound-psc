import { DataMessage } from '../channels';
import { JsonSerializable } from '@wuespace/telestion-client-types';

export type PressureClassName =
	'de.jvpichowski.rocketsound.messages.base.Pressure';

export interface PressureData extends Record<string, JsonSerializable> {
	pressure: number;
	className: PressureClassName;
}

export type TemperatureClassName =
	'de.jvpichowski.rocketsound.messages.base.Temperature';

export interface TemperatureData extends Record<string, JsonSerializable> {
	temperature: number;
	className: TemperatureClassName;
}

export type AltitudeClassName =
	'de.jvpichowski.rocketsound.messages.base.Altitude';

export interface AltitudeData extends Record<string, JsonSerializable> {
	altitude: number;
	className: AltitudeClassName;
}

export type BaroDataClassName =
	'de.jvpichowski.rocketsound.messages.base.BaroData';

export interface BaroDataData extends Record<string, JsonSerializable> {
	press: PressureData;
	temp: TemperatureData;
	alt: AltitudeData;
	className: BaroDataClassName;
}

export type BaroDataMessage = DataMessage<BaroDataData, BaroDataClassName>;

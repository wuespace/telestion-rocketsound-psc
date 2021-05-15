import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export type AccelerometerClassName =
	'de.jvpichowski.rocketsound.messages.base.Accelerometer';

export interface AccelerometerData extends Record<string, JsonSerializable> {
	x: number;
	y: number;
	z: number;
	classMame: AccelerometerClassName;
}

export type GyroscopeClassName =
	'de.jvpichowski.rocketsound.messages.base.Gyroscope';

export interface GyroscopeData extends Record<string, JsonSerializable> {
	x: number;
	y: number;
	z: number;
	className: GyroscopeClassName;
}

export type MagnetometerClassName =
	'de.jvpichowski.rocketsound.messages.base.Magnetometer';

export interface MagnometerData extends Record<string, JsonSerializable> {
	x: number;
	y: number;
	z: number;
	className: MagnetometerClassName;
}

export type NineDofClassName =
	'de.jvpichowski.rocketsound.messages.base.NineDofData';

export interface NineDofData extends Record<string, JsonSerializable> {
	acc: AccelerometerData;
	gyro: GyroscopeData;
	mag: MagnometerData;
	className: NineDofClassName;
}

export type NineDofMessage = DataMessage<NineDofData, NineDofClassName>;

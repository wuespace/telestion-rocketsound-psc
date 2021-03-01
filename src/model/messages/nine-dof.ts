import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

interface AccelerometerData {
	[key: string]: JsonSerializable;
	x: number;
	y: number;
	z: number;
}

interface GyroscopeData {
	[key: string]: JsonSerializable;
	x: number;
	y: number;
	z: number;
}

interface MagnometerData {
	[key: string]: JsonSerializable;
	x: number;
	y: number;
	z: number;
}

interface NineDofData {
	[key: string]: JsonSerializable;
	acc: AccelerometerData;
	gyro: GyroscopeData;
	mag: MagnometerData;
}

export type NineDofMessage = DataMessage<NineDofData>;

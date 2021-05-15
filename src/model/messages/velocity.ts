import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

export type VelocityClassName =
	'de.jvpichowski.rocketsound.messages.base.Velocity';

export interface VelocityData extends Record<string, JsonSerializable> {
	measured: number;
	estimated: number;
	className: VelocityClassName;
}

export type VelocityMessage = DataMessage<VelocityData, VelocityClassName>;

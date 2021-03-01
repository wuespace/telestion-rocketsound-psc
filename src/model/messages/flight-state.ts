import { JsonSerializable } from '@wuespace/telestion-client-types';
import { DataMessage } from '../channels';

interface FlightStateData {
	[key: string]: JsonSerializable;
	state: number;
	name: string;
}

export type FlightStateMessage = DataMessage<FlightStateData>;

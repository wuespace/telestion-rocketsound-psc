import { JsonSerializable } from '@wuespace/telestion-client-types';

export const MONGODB_NEW =
	'org.telestion.core.database.MongoDatabaseService/out#save';

export const NineDOF =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.base.NineDofData';
export const FlightState =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.base.FlightState';

export interface DataMessage<T extends JsonSerializable> {
	[key: string]: JsonSerializable;
	dataType: string;
	result: T[];
	className: string;
}

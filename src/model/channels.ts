import { JsonSerializable } from '@wuespace/telestion-client-types';

/**
 * Channel to save data to the database
 */
export const MONGODB_SAVE =
	'org.telestion.core.database.MongoDatabaseService/in#save';

/**
 * Channel where the database publishes the recently saved data
 */
export const MONGODB_NEW =
	'org.telestion.core.database.MongoDatabaseService/out#save';

export const MONGODB_FIND =
	'org.telestion.core.database.MongoDatabaseService/in#find';

export const NineDOF =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.base.NineDofData';
export const FlightState =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.base.FlightState';
export const GpsData =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.base.GpsData';
export const Amplitude =
	MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.sound.Amplitude';

export interface DataMessage<T extends JsonSerializable> {
	[key: string]: JsonSerializable;
	dataType: string;
	result: T[];
	className: string;
}

export const MOCK_POSITION =
	"org.telestion.example.RandomPositionPublisher/out#MockPos";

/**
 * Channel to save data to the database
 */

export const MONGODB_SAVE =
	"org.telestion.core.database.MongoDatabaseService/in#save";

/**
 * Channel where the database publishes the recently saved data
 */
export const MONGODB_NEW =
	"org.telestion.core.database.MongoDatabaseService/out#save";

export const MONGODB_FIND =
	"org.telestion.core.database.MongoDatabaseService/in#find";

export const EXAMPLE_CHANNEL = "HEY";

export type Channel =
	| typeof MOCK_POSITION
	| typeof EXAMPLE_CHANNEL
	| typeof MONGODB_SAVE
	| typeof MONGODB_NEW
	| typeof MONGODB_FIND;

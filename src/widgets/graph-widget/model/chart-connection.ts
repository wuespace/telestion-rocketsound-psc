import { JsonSerializable } from '@wuespace/telestion-client-types';

export interface ChartConnection extends Record<string, JsonSerializable> {
	/**
	 * The channel to subscribe to and receive data from.
	 */
	channel: string;

	/**
	 * Set descriptors which extract and display the data.
	 */
	descriptors: DataSetDescriptor[];
}

export interface DataSetDescriptor extends Record<string, JsonSerializable> {
	/**
	 * The title of the data set.
	 */
	title: string;

	/**
	 * The key from the received message object which should be displayed.
	 */
	key: string;

	/**
	 * The color of the data set.
	 */
	color: string;

	/**
	 * When `true` data points are displayed.
	 */
	isDotted: boolean;
}

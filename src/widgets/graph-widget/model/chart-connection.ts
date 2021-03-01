import { JsonSerializable } from '@wuespace/telestion-client-types';

export type SimpleCurveType =
	| 'basis'
	| 'basisClosed'
	| 'basisOpen'
	| 'linear'
	| 'linearClosed'
	| 'natural'
	| 'monotoneX'
	| 'monotoneY'
	| 'monotone'
	| 'step'
	| 'stepBefore'
	| 'stepAfter';

export interface ChartConnection
	extends Record<string, JsonSerializable | undefined> {
	/**
	 * The channel to subscribe to and receive data from.
	 */
	channel: string;

	/**
	 * Set descriptors which extract and display the data.
	 */
	descriptors: DataSetDescriptor[];
}

export interface DataSetDescriptor
	extends Record<string, JsonSerializable | undefined> {
	/**
	 * The title of the data set.
	 */
	title?: string;

	/**
	 * The key from the received message object which should be displayed.
	 */
	key: string;

	/**
	 * The color of the data set.
	 */
	color: string;

	/**
	 * The stroke width in pixels.
	 *
	 * Defaults to `1`.
	 */
	strokeWidth?: number;

	/**
	 * The type of interpolation to use.
	 *
	 * Defaults to `'monotone'`.
	 */
	interpolation?: SimpleCurveType;

	/**
	 * When `true` data points are displayed.
	 *
	 * Defaults to `false`.
	 */
	isDotted?: boolean;

	/**
	 * When `true` the rendered line is dashed.
	 *
	 * Defaults to `false`.
	 */
	isDashed?: boolean;
}

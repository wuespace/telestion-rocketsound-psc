import { JsonSerializable } from '@wuespace/telestion-client-types';
import { SpectrumColor } from '../../../model/spectrum-color';

export type InterpolationType =
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
	 *
	 * When no title is set, the key is used as a fallback.
	 */
	title?: string;

	/**
	 * The key from the received message object which should be displayed.
	 */
	key: string;

	/**
	 * The unit of the data set.
	 *
	 * When nothing is set, no unit is rendered.
	 */
	unit?: string;

	/**
	 * The color of the data set.
	 */
	color: SpectrumColor;

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
	interpolation?: InterpolationType;

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

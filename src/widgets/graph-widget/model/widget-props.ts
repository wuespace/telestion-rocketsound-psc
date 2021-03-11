import { GenericProps } from '@wuespace/telestion-client-types';
import { ChartConnection } from './chart-connection';

type AxisDomainItem = string | number | 'auto' | 'dataMin' | 'dataMax';

export type AxisDomain = string[] | number[] | [AxisDomainItem, AxisDomainItem];

export type ScaleType =
	| 'auto'
	| 'linear'
	| 'pow'
	| 'sqrt'
	| 'log'
	| 'identity'
	| 'time'
	| 'band'
	| 'point'
	| 'ordinal'
	| 'quantile'
	| 'quantize'
	| 'utc'
	| 'sequential'
	| 'threshold';

export interface WidgetProps extends GenericProps {
	/**
	 * Connections to get data from.
	 */
	connections: ChartConnection[];

	/**
	 * The number of data samples to display before removing the old ones.
	 */
	maxDataSamples: number;

	/**
	 * When `true` the rendered chart lines have colored areas
	 * between the x-axis and the graph.
	 *
	 * Defaults to `false`.
	 */
	isArea?: boolean;

	/**
	 * When `true` a cartesian grid is rendered in the background.
	 *
	 * Defaults to `false`.
	 */
	isCartesianGrid?: boolean;

	/**
	 * When `true` the graph holds when hovering over it.
	 *
	 * Defaults to `true`.
	 */
	isHoldOnHover?: boolean;

	/**
	 * When `true` it displays a tooltip above the chart.
	 *
	 * Defaults to `true`.
	 */
	isTooltip?: boolean;

	/**
	 * Specifies the domain of the y-axis.
	 *
	 * Defaults to `['auto', 'auto']`.
	 *
	 * @see {@link AxisDomain}
	 */
	domain?: AxisDomain;

	/**
	 * The scale method of the y-axis.
	 * If set to `'auto'`, the scale method is decided by the type of chart.
	 *
	 * Defaults to `'auto'`.
	 */
	scale?: ScaleType;
}

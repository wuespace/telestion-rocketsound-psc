import { GenericProps } from '@wuespace/telestion-client-types';
import { ChartConnection } from './chart-connection';

export interface WidgetProps extends GenericProps {
	/**
	 * When `true` the rendered chart lines have colored areas below.
	 */
	isArea: boolean;

	/**
	 * Render a cartesian grid in the background.
	 */
	isCartesianGrid: boolean;

	/**
	 * When `true` the graph holds when hovering over it.
	 */
	isHoldOnHover: boolean;

	/**
	 * When `true` it displays a tooltip above the chart.
	 */
	isTooltip: boolean;

	/**
	 * The number of data samples to display before removing the old ones.
	 */
	maxDataSamples: number;

	/**
	 * Connections to get data from.
	 */
	connections: ChartConnection[];
}

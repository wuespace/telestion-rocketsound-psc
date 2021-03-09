import { SpectrumColor } from '../../../model/spectrum-color';
import { AxisDomain, DataSample, DataSetDescriptor, ScaleType } from '../model';

export const chartSpectrumColors: SpectrumColor[] = [
	'gray-100',
	'gray-400',
	'gray-800'
];

export const legendFormatter = (value: string, entry: any) =>
	entry.payload.unit ? `${value} (${entry.payload.unit})` : value; // trust me, I'm an engineer ;D

export const xTickFormatter = (value: unknown) =>
	typeof value === 'number' ? value.toFixed(2) : 'NaN';

export const yTickFormatter = (value: unknown) => {
	if (typeof value !== 'number') return 'NaN';

	const formatted =
		Math.abs(value) < 0.01 ? value.toExponential(2) : value.toPrecision(3);
	return /^0.00e[+-]0$/.test(formatted) ? '0' : formatted;
};

export interface GraphOptions {
	/**
	 * When `true` the rendered chart lines have colored areas
	 * between the x-axis and the graph.
	 */
	isArea: boolean;

	/**
	 * When `true` a cartesian grid is rendered in the background.
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
	 * Specifies the domain of the y-axis.
	 */
	domain: AxisDomain;

	/**
	 * The scale method of the y-axis.
	 * If set to `'auto'`, the scale method is decided by the type of chart.
	 */
	scale: ScaleType;
}

export interface GraphProps {
	/**
	 * The data to display in the chart.
	 */
	data: DataSample[];

	/**
	 * The data set descriptors to render.
	 */
	descriptors: DataSetDescriptor[];

	/**
	 * Further options for the graph render.
	 */
	options: GraphOptions;
}

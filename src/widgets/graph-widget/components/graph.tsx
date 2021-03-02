import {
	ResponsiveContainer,
	Line,
	LineChart,
	CartesianGrid,
	AreaChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	Area
} from 'recharts';

import { DataSample, DataSetDescriptor } from '../model';
import { roundTo } from '../../lib';
import { useHoldState, useSpectrumColor } from '../../hooks';

import { CustomTooltip } from './custom-tooltip';

const xTickFormatter = (value: number) => `${roundTo(value, 2)}`;

export interface GraphOptions {
	isArea: boolean;
	isCartesianGrid: boolean;
	isHoldOnHover: boolean;
}

export interface GraphProps {
	data: DataSample[];
	descriptors: DataSetDescriptor[];
	options: GraphOptions;
}

export function Graph({ data, descriptors, options }: GraphProps) {
	const { isArea, isCartesianGrid, isHoldOnHover } = options;
	const [background, grid, axis] = useSpectrumColor([
		'gray-100',
		'gray-400',
		'gray-800'
	]);
	const colors = useSpectrumColor(
		descriptors.map(descriptor => descriptor.color)
	);
	const [displayed, hold, unHold] = useHoldState(data);

	const Chart = isArea ? AreaChart : LineChart;
	const DataRenderer = isArea ? Area : Line;

	// Important note!
	// The chart is no longer working if the components are moved
	// in different sub components. (component chain breaks)
	// So no cleanup or refactoring possible!
	return (
		<ResponsiveContainer>
			<Chart
				data={isHoldOnHover ? displayed : data}
				onMouseEnter={hold}
				onMouseMove={hold}
				onMouseLeave={unHold}
			>
				{isArea && (
					<defs>
						{descriptors.map((descriptor, index) => (
							<linearGradient
								key={descriptor.key}
								id={`${index}`}
								x1={0}
								y1={0}
								x2={0}
								y2={1}
							>
								<stop offset="5%" stopColor={colors[index]} stopOpacity={0.8} />
								<stop offset="95%" stopColor={background} stopOpacity={0} />
							</linearGradient>
						))}
					</defs>
				)}
				{isCartesianGrid && (
					<CartesianGrid strokeDasharray="4 8" strokeWidth={1} stroke={grid} />
				)}
				<XAxis
					dataKey="time"
					unit="s"
					tickFormatter={xTickFormatter}
					stroke={axis}
				/>
				<YAxis stroke={axis} />
				{/*// @ts-ignore*/}
				<Tooltip content={<CustomTooltip />} />
				<Legend />

				{descriptors.map((descriptor, index) => (
					// @ts-ignore
					<DataRenderer
						type={descriptor.interpolation || 'monotone'}
						dataKey={descriptor.key}
						name={descriptor.title}
						stroke={colors[index]}
						strokeWidth={descriptor.strokeWidth || 1}
						dot={descriptor.isDotted || false}
						strokeDasharray={descriptor.isDashed || false ? '4 8' : undefined}
						isAnimationActive={false}
						fillOpacity={1}
						fill={isArea ? `url(#${index})` : undefined}
					/>
				))}
			</Chart>
		</ResponsiveContainer>
	);
}

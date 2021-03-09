import { useMemo } from 'react';
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

import { useHoldState, useSpectrumColor } from '../../hooks';
import {
	chartSpectrumColors,
	GraphProps,
	legendFormatter,
	xTickFormatter,
	yTickFormatter
} from './graph.model';
import { CustomTooltip } from './custom-tooltip';

export function Graph({
	data,
	descriptors,
	options: { domain, isArea, isCartesianGrid, isHoldOnHover, isTooltip, scale }
}: GraphProps) {
	const [background, grid, axis] = useSpectrumColor(chartSpectrumColors);
	const colors = useSpectrumColor(
		descriptors.map(descriptor => descriptor.color)
	);
	const [displayed, hold, unHold] = useHoldState(data);

	const Chart = useMemo(() => (isArea ? AreaChart : LineChart), [isArea]);
	const DataRenderer = useMemo(() => (isArea ? Area : Line), [isArea]);

	const dataRenderers = useMemo(
		() =>
			descriptors.map(
				(
					{ interpolation, isDashed, isDotted, key, strokeWidth, title, unit },
					index
				) => (
					// @ts-ignore
					<DataRenderer
						key={key}
						type={interpolation || 'monotone'}
						dataKey={key}
						name={title}
						unit={unit}
						stroke={colors[index]}
						strokeWidth={strokeWidth || 1}
						dot={isDotted || false}
						strokeDasharray={isDashed || false ? '4 8' : undefined}
						isAnimationActive={false}
						fillOpacity={1}
						fill={isArea ? `url(#${index})` : undefined}
					/>
				)
			),
		[DataRenderer, colors, descriptors, isArea]
	);

	const gradients = useMemo(
		() =>
			descriptors.map((descriptor, index) => (
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
			)),
		[background, colors, descriptors]
	);

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
				{isArea && <defs>{gradients}</defs>}
				{isCartesianGrid && (
					<CartesianGrid strokeDasharray="4 8" strokeWidth={1} stroke={grid} />
				)}
				<XAxis
					dataKey="time"
					unit="s"
					tickFormatter={xTickFormatter}
					stroke={axis}
				/>
				<YAxis
					type="number"
					tickFormatter={yTickFormatter}
					domain={domain}
					stroke={axis}
					scale={scale}
				/>
				{/*// @ts-ignore*/}
				{isTooltip && <Tooltip content={CustomTooltip} />}
				<Legend formatter={legendFormatter} />

				{dataRenderers}
			</Chart>
		</ResponsiveContainer>
	);
}

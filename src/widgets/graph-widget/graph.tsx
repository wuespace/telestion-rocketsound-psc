import {
	ResponsiveContainer,
	Line,
	LineChart,
	CartesianGrid,
	AreaChart,
	XAxis,
	YAxis,
	Tooltip,
	Legend
} from 'recharts';
import { DataSample, DataSetDescriptor } from './model';
import { useDarkColorScheme } from './hooks/use-dark-color-scheme';

export interface GraphProps {
	data: DataSample[];
	descriptors: DataSetDescriptor[];
	isArea: boolean;
}

export function Graph({ data, descriptors, isArea }: GraphProps) {
	const isDark = useDarkColorScheme();

	return (
		<ResponsiveContainer>
			{isArea ? (
				<AreaChart data={data}>{/* TODO: Implement area chart */}</AreaChart>
			) : (
				<LineChart data={data}>
					<XAxis dataKey="time" stroke={isDark ? '#e3e3e3' : '#4b4b4b'} />
					<YAxis stroke={isDark ? '#e3e3e3' : '#4b4b4b'} />
					<CartesianGrid strokeDasharray="4 8" />
					<Tooltip />
					<Legend />
					{descriptors.map(descriptor => (
						<Line
							type="monotone"
							dataKey={descriptor.key}
							name={descriptor.title}
							stroke={descriptor.color}
							dot={false}
							isAnimationActive={false}
						/>
					))}
				</LineChart>
			)}
		</ResponsiveContainer>
	);
}

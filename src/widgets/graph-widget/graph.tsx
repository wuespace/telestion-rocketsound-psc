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

export interface GraphProps {
	data: DataSample[];
	descriptors: DataSetDescriptor[];
	isArea: boolean;
}

export function Graph({ data, descriptors, isArea }: GraphProps) {
	return (
		<ResponsiveContainer>
			{isArea ? (
				<AreaChart data={data}>{/* TODO: Implement area chart */}</AreaChart>
			) : (
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="4 4" />
					<XAxis dataKey="time" />
					<YAxis />
					<Tooltip />
					<Legend />
					{descriptors.map(descriptor => (
						<Line
							type="monotone"
							dataKey={descriptor.key}
							name={descriptor.title}
							stroke={descriptor.color}
							dot={descriptor.isDotted}
						/>
					))}
				</LineChart>
			)}
		</ResponsiveContainer>
	);
}

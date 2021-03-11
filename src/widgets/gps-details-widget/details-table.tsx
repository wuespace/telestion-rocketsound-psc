import {
	Cell,
	Column,
	Row,
	Table as RSTable,
	TableBody,
	TableHeader
} from '@react-spectrum/table';

import { GpsDataData } from '../../model/messages';
import {
	getFormattedTimeString,
	printLatitude,
	printLongitude
} from './formatters';

// We need these because they provide the CSS classes used above.
// These CSS classes also update on a color scheme change,
// so we don't have to worry about that.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cssLoader = (
	<RSTable aria-label="none">
		<TableHeader columns={[]}>
			{column => <Column>{column}</Column>}
		</TableHeader>
		<TableBody items={[]}>
			{item => <Row key={item}>{key => <Cell>{item[key]}</Cell>}</Row>}
		</TableBody>
	</RSTable>
);

interface Detail {
	name: string;
	value: string | number | JSX.Element;
}

function buildDetails({
	latitude,
	longitude,
	satCount,
	time
}: GpsDataData): Detail[] {
	const date = new Date(time);

	return [
		{
			name: 'Satellite count',
			value: satCount
		},
		{
			name: 'Latitude',
			value: printLatitude(latitude)
		},
		{
			name: 'Longitude',
			value: printLongitude(longitude)
		},
		{
			name: 'Timestamp',
			value: getFormattedTimeString(date)
		}
	];
}

export interface DetailsTableProps {
	data: GpsDataData;
	isQuiet: boolean;
}

export function DetailsTable({ data, isQuiet }: DetailsTableProps) {
	const details = buildDetails(data);

	return (
		<table
			className={
				isQuiet ? '_spectrum-Table--quiet_60175' : '_spectrum-Table_60175'
			}
			style={{ width: '100%' }}
		>
			<thead>
				<tr>
					<th
						className="_spectrum-Table-headCell_60175"
						style={{ textAlign: 'left' }}
					>
						Name
					</th>
					<th
						className="_spectrum-Table-headCell_60175"
						style={{ textAlign: 'right' }}
					>
						Value
					</th>
				</tr>
			</thead>

			<tbody className="_spectrum-Table-body_60175">
				{details.map(detail => (
					<tr className="_spectrum-Table-row_60175">
						<td className="_spectrum-Table-cell_60175">{detail.name}</td>
						<td
							className="_spectrum-Table-cell_60175"
							style={{ textAlign: 'right' }}
						>
							{detail.value}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

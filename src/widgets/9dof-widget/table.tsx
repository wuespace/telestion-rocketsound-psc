import {
	Table as RSTable,
	TableHeader,
	Column,
	TableBody,
	Row,
	Cell
} from '@react-spectrum/table';
import { NineDofData } from '../../model/messages';

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

export interface TableProps {
	data: NineDofData;
	isQuiet: boolean;
}

export function Table({ data, isQuiet }: TableProps) {
	const { acc, gyro, mag } = data;
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
						Sensor
					</th>
					<th
						className="_spectrum-Table-headCell_60175"
						style={{ textAlign: 'right' }}
					>
						<code>X</code>
					</th>
					<th
						className="_spectrum-Table-headCell_60175"
						style={{ textAlign: 'right' }}
					>
						<code>Y</code>
					</th>
					<th
						className="_spectrum-Table-headCell_60175"
						style={{ textAlign: 'right' }}
					>
						<code>Z</code>
					</th>
				</tr>
			</thead>

			<tbody className="_spectrum-Table-body_60175">
				<tr className="_spectrum-Table-row_60175">
					<td className="_spectrum-Table-cell_60175 _spectrum-Table-cell--divider_60175">
						Accelerometer
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{acc.x.toFixed(3)}
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{acc.y.toFixed(3)}
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{acc.z.toFixed(3)}
					</td>
				</tr>
				<tr className="_spectrum-Table-row_60175">
					<td className="_spectrum-Table-cell_60175 _spectrum-Table-cell--divider_60175">
						Gyroscope
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{gyro.x.toFixed(3)}
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{gyro.y.toFixed(3)}
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{gyro.z.toFixed(3)}
					</td>
				</tr>
				<tr className="_spectrum-Table-row_60175">
					<td className="_spectrum-Table-cell_60175 _spectrum-Table-cell--divider_60175">
						Magnetometer
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{mag.x.toFixed(3)}
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{mag.y.toFixed(3)}
					</td>
					<td
						className="_spectrum-Table-cell_60175"
						style={{ textAlign: 'right' }}
					>
						{mag.z.toFixed(3)}
					</td>
				</tr>
			</tbody>
		</table>
	);
}

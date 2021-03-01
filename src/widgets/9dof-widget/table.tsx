import {
	Table as RSTable,
	TableHeader,
	Column,
	TableBody,
	Row,
	Cell
} from '@react-spectrum/table';
import { Column as ColumnType, Item as ItemType, ItemValue } from './model';

function display(value: ItemValue): string | number {
	switch (typeof value) {
		case 'boolean':
			return value ? 'true' : 'false';
		case 'number':
			return Math.round(value * 1000) / 1000;
		case 'string':
			return value;
		default:
			throw new TypeError(
				`Type ${typeof value} can not be rendered in a table cell.`
			);
	}
}

export interface TableProps {
	columns: ColumnType[];
	items: ItemType[];
}

export function Table({ columns, items }: TableProps) {
	return (
		<RSTable>
			<TableHeader columns={columns}>
				{column => <Column>{column.name}</Column>}
			</TableHeader>
			<TableBody items={items}>
				{item => (
					<Row key={item.key}>{key => <Cell>{display(item[key])}</Cell>}</Row>
				)}
			</TableBody>
		</RSTable>
	);
}

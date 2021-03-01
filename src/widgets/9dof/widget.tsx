import { Heading, View } from '@adobe/react-spectrum';
import {
	Table,
	TableHeader,
	Column,
	TableBody,
	Row,
	Cell
} from '@react-spectrum/table';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { NineDofMessage } from '../../model/messages/nine-dof';
import { NineDOF } from '../../model/channels';
import React from 'react';
import { LoadingIndicator } from '@wuespace/telestion-client-common';

const columns = [
	{ name: 'Sensor', key: 'sensor' },
	{ name: <code>x</code>, key: 'x' },
	{ name: <code>y</code>, key: 'y' },
	{ name: <code>z</code>, key: 'z' }
];

export function Widget() {
	const latestData = useChannelLatest<NineDofMessage>(NineDOF)?.result[0];

	const items = [
		{ sensor: 'Accelerometer', ...latestData?.acc },
		{ sensor: 'Gyroscope', ...latestData?.gyro },
		{ sensor: 'Magnetometer', ...latestData?.mag }
	];

	console.log(items);

	return (
		<View marginX={'size-200'}>
			<Heading level={2}>9dof widget</Heading>
			<LoadingIndicator dependencies={[latestData]}>
				{() => (
					<>
						<Table>
							<TableHeader columns={columns}>
								{(column: any) => <Column>{column.name}</Column>}
							</TableHeader>
							<TableBody items={items}>
								{(item: any) => (
									<Row key={item.sensor + item.x + item.y + item.z}>
										{(key: any) => (
											<Cell>
												{typeof item[key] === 'number'
													? Math.round(item[key] * 1000) / 1000
													: item[key]}
											</Cell>
										)}
									</Row>
								)}
							</TableBody>
						</Table>
					</>
				)}
			</LoadingIndicator>
		</View>
	);
}

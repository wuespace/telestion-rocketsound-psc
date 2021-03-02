import { Heading, View } from '@adobe/react-spectrum';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { LoadingIndicator } from '@wuespace/telestion-client-common';
import { BaseRendererProps } from '@wuespace/telestion-client-types';

import { NineDofMessage } from '../../model/messages';
import { NineDOF } from '../../model/channels';

import { Table } from './table';
import { Column, Item } from './model';

const columns: Column[] = [
	{ name: 'Sensor', key: 'sensor' },
	{ name: <code>x</code>, key: 'x' },
	{ name: <code>y</code>, key: 'y' },
	{ name: <code>z</code>, key: 'z' }
];

export function Widget({ title }: BaseRendererProps) {
	const latestData = useChannelLatest<NineDofMessage>(NineDOF)?.result[0];

	const items: Item[] = [
		{
			sensor: 'Accelerometer',
			key: `acc-${latestData ? Object.values(latestData?.acc) : ''}`,
			...latestData?.acc
		},
		{
			sensor: 'Gyroscope',
			key: `gyro-${latestData ? Object.values(latestData?.gyro) : ''}`,
			...latestData?.gyro
		},
		{
			sensor: 'Magnetometer',
			key: `mag-${latestData ? Object.values(latestData?.mag) : ''}`,
			...latestData?.mag
		}
	];

	return (
		<View marginX={'size-200'}>
			<Heading level={3}>{title}</Heading>
			<LoadingIndicator dependencies={[latestData]}>
				{() => <Table columns={columns} items={items} />}
			</LoadingIndicator>
		</View>
	);
}

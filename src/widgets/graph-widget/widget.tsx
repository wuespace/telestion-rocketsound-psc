import { useMemo } from 'react';
import { BaseRendererProps } from '@wuespace/telestion-client-types';
import { Heading, View, Flex } from '@adobe/react-spectrum';

import { DataSetDescriptor, WidgetProps } from './model';
import { useData } from './hooks';
import { Graph } from './graph';

export function Widget({
	title,
	isArea,
	connections
}: BaseRendererProps<WidgetProps>) {
	const data = useData(connections);
	const descriptors = useMemo(
		() =>
			connections.reduce(
				(acc, connection) => [...acc, ...connection.descriptors],
				[] as DataSetDescriptor[]
			),
		[connections]
	);

	return (
		<View width="100%" height="100%">
			<Flex direction="column" width="100%" height="100%">
				<Heading level={3} marginX="size-200">
					{title}
				</Heading>
				<Graph data={data} descriptors={descriptors} isArea={isArea} />
			</Flex>
		</View>
	);
}

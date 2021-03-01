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
			<Flex
				direction="column"
				justifyContent="stretch"
				width="100%"
				height="100%"
			>
				<Heading flexGrow={0} level={3} marginX="size-200">
					{title}
				</Heading>
				<View flexGrow={1} paddingEnd="size-200" overflow="hidden">
					<Graph data={data} descriptors={descriptors} isArea={isArea} />
				</View>
				<View flexGrow={0} width="100%" height="size-200" />
			</Flex>
		</View>
	);
}

import { useMemo } from 'react';
import { BaseRendererProps } from '@wuespace/telestion-client-types';
import { Heading, View, Flex } from '@adobe/react-spectrum';

import { DataSetDescriptor, WidgetProps } from './model';
import { useData } from './hooks';
import { Graph } from './components/graph';

export function Widget({
	title,
	connections,
	maxDataSamples,
	isArea = false,
	isCartesianGrid = false,
	isHoldOnHover = true,
	isTooltip = true,
	domain = ['auto', 'auto'],
	scale = 'auto'
}: BaseRendererProps<WidgetProps>) {
	const data = useData(connections, maxDataSamples);
	const descriptors = useMemo(
		() =>
			connections.reduce(
				(acc, connection) => [...acc, ...connection.descriptors],
				[] as DataSetDescriptor[]
			),
		[connections]
	);
	const options = useMemo(
		() => ({
			isArea,
			isCartesianGrid,
			isHoldOnHover,
			isTooltip,
			domain,
			scale
		}),
		[domain, isArea, isCartesianGrid, isHoldOnHover, isTooltip, scale]
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
					<Graph data={data} descriptors={descriptors} options={options} />
				</View>
				<View flexGrow={0} width="100%" height="size-200" />
			</Flex>
		</View>
	);
}

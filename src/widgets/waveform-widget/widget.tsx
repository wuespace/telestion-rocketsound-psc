import { View, Heading, Flex } from '@adobe/react-spectrum';
import { BaseRendererProps } from '@wuespace/telestion-client-types';

import { WidgetProps } from './model';
import { Waveform } from './waveform';

export function Widget({
	title,
	channel,
	xLabel,
	yLabel,
	stroke,
	minValue,
	maxValue
}: BaseRendererProps<WidgetProps>) {
	return (
		<View width="100%" height="100%">
			<Flex direction="column" width="100%" height="100%">
				<Heading flexGrow={0} level={3} marginX="size-200">
					{title}
				</Heading>
				<View flexGrow={1} paddingEnd="size-200">
					<Waveform
						channel={channel}
						xLabel={xLabel}
						yLabel={yLabel}
						stroke={stroke}
						minValue={minValue}
						maxValue={maxValue}
					/>
				</View>
			</Flex>
		</View>
	);
}

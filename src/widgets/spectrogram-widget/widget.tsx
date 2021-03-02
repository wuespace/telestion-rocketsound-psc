import { View, Heading, Flex } from '@adobe/react-spectrum';
import { BaseRendererProps } from '@wuespace/telestion-client-types';

import { Spectrum } from '../../model/channels';
import { Spectrogram } from './spectrogram';

export function Widget({ title }: BaseRendererProps) {
	return (
		<View width="100%" height="100%">
			<Flex direction="column" width="100%" height="100%">
				<Heading flexGrow={0} level={3} marginX="size-200">
					{title}
				</Heading>
				<View flexGrow={1} paddingEnd="size-200">
					<Spectrogram xLabel="Samples" yLabel="Frequency" channel={Spectrum} />
				</View>
			</Flex>
		</View>
	);
}

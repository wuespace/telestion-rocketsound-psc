import { Flex, Heading, View } from '@adobe/react-spectrum';
import { BaseRendererProps } from '@wuespace/telestion-client-types';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { LoadingIndicator } from '@wuespace/telestion-client-common';

import { GpsDataMessage } from '../../model/messages';
import { GpsData } from '../../model/channels';
import { DetailsTable } from './details-table';

export function Widget({ title }: BaseRendererProps) {
	const latestData = useChannelLatest<GpsDataMessage>(GpsData)?.result[0];

	return (
		<View width="100%" height="100%" padding="size-200">
			<Flex direction="column" width="100%" height="100%">
				<Heading marginTop={0} flexGrow={0} level={3}>
					{title}
				</Heading>
				<LoadingIndicator dependencies={[latestData]}>
					{() => (
						<View width="100%" overflow="auto">
							{/* TODO: Waiting for Loading Indicator improvement:
					  			https://github.com/TelestionTeam/telestion-client/pull/350
					  		*/}
							{/*// @ts-ignore*/}
							<DetailsTable data={latestData} isQuiet={true} />
						</View>
					)}
				</LoadingIndicator>
			</Flex>
		</View>
	);
}

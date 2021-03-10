import { Flex, Heading, View } from '@adobe/react-spectrum';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { LoadingIndicator } from '@wuespace/telestion-client-common';
import { BaseRendererProps } from '@wuespace/telestion-client-types';

import { NineDofMessage } from '../../model/messages';
import { NineDOF } from '../../model/channels';

import { Table } from './table';

export function Widget({ title }: BaseRendererProps) {
	const latestData = useChannelLatest<NineDofMessage>(NineDOF)?.result[0];

	return (
		<View width="100%" height="100%" padding="size-200">
			<Flex direction="column" width="100%" height="100%">
				<Heading marginTop={0} flexGrow={0} level={3}>
					{title}
				</Heading>
				<LoadingIndicator dependencies={[latestData]}>
					{() => (
						<View width="100%" overflow="auto">
							{/* Waiting for Loading Indicator improvement:
					  			https://github.com/TelestionTeam/telestion-client/pull/350
					  		*/}
							{/*// @ts-ignore*/}
							<Table data={latestData} isQuiet={false} />
						</View>
					)}
				</LoadingIndicator>
			</Flex>
		</View>
	);
}

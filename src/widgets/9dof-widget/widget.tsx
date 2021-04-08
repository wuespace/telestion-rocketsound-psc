import { Flex, Heading, View } from '@adobe/react-spectrum';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { LoadingIndicator } from '@wuespace/telestion-client-common';
import { BaseRendererProps } from '@wuespace/telestion-client-types';

import { NineDofMessage } from '../../model/messages';
import { NineDOF } from '../../model/channels';

import { Table } from './table';

export function Widget({ title }: BaseRendererProps) {
	const latestData = useChannelLatest<NineDofMessage>(NineDOF);

	return (
		<View width="100%" height="100%" padding="size-200">
			<Flex direction="column" width="100%" height="100%">
				<Heading marginTop={0} flexGrow={0} level={3}>
					{title}
				</Heading>
				{/*// @ts-ignore*/}
				<LoadingIndicator dependencies={[latestData]}>
					{({ result }) => (
						<View width="100%" overflow="auto">
							<Table data={result[0]} isQuiet={false} />
						</View>
					)}
				</LoadingIndicator>
			</Flex>
		</View>
	);
}

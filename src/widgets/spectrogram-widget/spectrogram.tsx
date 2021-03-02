import { Flex, View, Text } from '@adobe/react-spectrum';
import AutoSizer from 'react-virtualized-auto-sizer';

import { ChannelAddress } from '@wuespace/telestion-client-types';
import { CanvasRenderer } from './canvas-renderer';

export interface SpectrogramProps {
	/**
	 * Text label for the x-axis.
	 */
	xLabel: string;

	/**
	 * Text label for the y-axis.
	 */
	yLabel: string;

	channel: ChannelAddress;
}

/**
 * A basic spectrogram component for displaying spectrum information in relation to time
 */
export function Spectrogram({ xLabel, yLabel, channel }: SpectrogramProps) {
	return (
		<View padding="size-10" height="100%">
			<Flex flexGrow={0} direction="row" height="100%">
				<Flex direction="column">
					<Flex flexGrow={1} justifyContent="center" alignItems="center">
						<Text
							UNSAFE_style={{
								writingMode: 'vertical-rl',
								transform: 'rotate(180deg)'
							}}
						>
							{yLabel}
						</Text>
					</Flex>
					{/* spacer */}
					<View
						flexGrow={0}
						width="single-line-height"
						height="single-line-height"
					/>
				</Flex>

				<Flex flexGrow={1} direction="column">
					<View
						flexGrow={1}
						width="100%"
						backgroundColor="static-black"
						borderColor="gray-700"
						borderWidth="thick"
					>
						<View width="100%" height="100%">
							<AutoSizer>
								{({ width, height }) => (
									<CanvasRenderer
										channel={channel}
										width={width}
										height={height}
									/>
								)}
							</AutoSizer>
						</View>
					</View>

					<Flex
						flexGrow={0}
						justifyContent="center"
						height="single-line-height"
					>
						<Text>{xLabel}</Text>
					</Flex>
				</Flex>
			</Flex>
		</View>
	);
}

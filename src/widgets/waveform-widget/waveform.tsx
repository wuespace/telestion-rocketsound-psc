import { Flex, View, Text } from '@adobe/react-spectrum';
import AutoSizer from 'react-virtualized-auto-sizer';
import { ChannelAddress } from '@wuespace/telestion-client-types';

import { SpectrumColor } from '../../model/spectrum-color';
import { CanvasRenderer } from './canvas-renderer';

export interface WaveformProps {
	/**
	 * Text label for the x-axis.
	 */
	xLabel: string;

	/**
	 * Text label for the y-axis.
	 */
	yLabel: string;

	channel: ChannelAddress;

	stroke: SpectrumColor;

	minValue: number;

	maxValue: number;
}

/**
 * A basic waveform component displaying amplitudes on a HTMLCanvas.
 */
export function Waveform({
	xLabel,
	yLabel,
	channel,
	stroke,
	minValue,
	maxValue
}: WaveformProps) {
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
						backgroundColor="gray-100"
						borderColor="gray-200"
						borderWidth="thick"
					>
						<View width="100%" height="100%">
							<AutoSizer>
								{({ width, height }) => (
									<CanvasRenderer
										channel={channel}
										width={width}
										height={height}
										stroke={stroke}
										minValue={minValue}
										maxValue={maxValue}
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

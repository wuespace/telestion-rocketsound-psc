import { Flex, View, Text } from '@adobe/react-spectrum';
import AutoSizer from 'react-virtualized-auto-sizer';

import { useDarkColorScheme } from '../hooks';
import { ChannelAddress } from '@wuespace/telestion-client-types';
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
}

/**
 * A basic waveform component displaying amplitudes on a HTMLCanvas.
 */
export function Waveform({ xLabel, yLabel, channel }: WaveformProps) {
	const isDark = useDarkColorScheme();

	// const canvasContainerStyle: React.CSSProperties = {
	// 	width: '100%',
	// 	height: '100%',
	// 	backgroundColor: isDark ? 'gray' : 'white',
	// 	border: '1px dotted gray',
	// 	borderRadius: '5px',
	// 	display: 'flex',
	// 	alignItems: 'center'
	// };
	//
	// const yAxisStyle: React.CSSProperties = {
	// 	writingMode: 'vertical-rl',
	// 	transform: 'rotate(180deg)',
	// 	textAlign: 'center',
	// 	width: '20px'
	// };
	//
	// const xAxisStyle: React.CSSProperties = {
	// 	textAlign: 'center',
	// 	width: `${canvasWidth}px` // ????
	// };

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
						backgroundColor="gray-900"
						borderColor="gray-700"
						borderWidth="thick"
					>
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

					<Flex
						flexGrow={0}
						justifyContent="center"
						height="single-line-height"
					>
						<Text>{xLabel}</Text>
					</Flex>
				</Flex>
			</Flex>

			{/*<Flex direction="column" height={'100%'}>*/}
			{/*	<Flex direction="row" flexGrow={1}>*/}
			{/*		<View>{yLabel}</View>*/}
			{/*		<div style={yAxisStyle}>{yLabel}</div>*/}
			{/*		<div style={canvasContainerStyle}>*/}
			{/*			<AutoSizer>*/}
			{/*				{({ width, height }) => (*/}
			{/*					<CanvasRenderer*/}
			{/*						channel={channel}*/}
			{/*						width={width}*/}
			{/*						height={height}*/}
			{/*					/>*/}
			{/*				)}*/}
			{/*			</AutoSizer>*/}
			{/*		</div>*/}
			{/*	</Flex>*/}
			{/*	<Flex direction="row" flexGrow={0}>*/}
			{/*		<div style={{ width: '20px' }}>&nbsp;</div>*/}
			{/*		<div style={xAxisStyle}>{xLabel}</div>*/}
			{/*	</Flex>*/}
			{/*</Flex>*/}
		</View>
	);
}

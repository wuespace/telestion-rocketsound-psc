import { useColorScheme } from '@wuespace/telestion-client-common';
import { Flex, View } from '@adobe/react-spectrum';
import React, { useEffect, useRef, useState } from 'react';
import useCanvas from './useCanvas';

type WaveformProps = {
	amplitude: number;
	xLabel: string;
	yLabel: string;
};

/**
 * A basic waveform component displaying amplitudes on a HTMLCanvas.
 *
 * @param {number} amplitude most recent value to be displayed at the end of the waveform
 * @param {string} xLabel text label for the x-axis
 * @param {string} yLabel text label for the y-axis
 *
 */
export function Waveform({ amplitude, xLabel, yLabel }: WaveformProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const [canvasWidth, setCanvasWidth] = useState<number>(100);
	const [canvasHeight, setCanvasHeight] = useState<number>(100);
	const [amplitudes, setAmplitudes] = useState<number[]>([]);
	const { colorScheme } = useColorScheme(state => ({
		colorScheme: state.colorScheme
	}));

	const canvasContainerStyle: React.CSSProperties = {
		width: '100%',
		height: '100%',
		backgroundColor: colorScheme.match('dark') ? 'gray' : 'white',
		border: '1px dotted gray',
		borderRadius: '5px',
		display: 'flex',
		alignItems: 'center'
	};

	const yAxisStyle: React.CSSProperties = {
		writingMode: 'vertical-rl',
		transform: 'rotate(180deg)',
		textAlign: 'center',
		width: '20px'
	};

	const xAxisStyle: React.CSSProperties = {
		textAlign: 'center',
		width: `${canvasWidth}px`
	};

	useEffect(() => {
		if (amplitudes.length < Math.floor(canvasWidth * 0.9)) {
			setAmplitudes(prevAmps => [...prevAmps, amplitude]);
		} else {
			setAmplitudes(prevAmps => {
				let shifted = [...prevAmps];
				shifted.shift();
				shifted.push(amplitude);
				return shifted;
			});
		}
	}, [amplitude]);

	useEffect(() => {
		// TODO: handle resizes
		if (containerRef.current) {
			setCanvasWidth(containerRef.current.offsetWidth);
			setCanvasHeight(containerRef.current.offsetHeight);
		}
	}, [containerRef]);

	const drawWaveform = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.lineWidth = 1;
		ctx.lineCap = 'round';
		ctx.strokeStyle = '#452897';
		ctx.beginPath();
		for (let i = 0; i < amplitudes.length; i++) {
			ctx.moveTo(i, ctx.canvas.height);
			ctx.lineTo(i, ctx.canvas.height - amplitudes[i]);
		}
		ctx.stroke();
	};

	const canvasRef = useCanvas(drawWaveform);

	return (
		<View padding="size-10">
			<Flex direction="column">
				<Flex direction="row">
					<div style={yAxisStyle}>{yLabel}</div>
					<div ref={containerRef} style={canvasContainerStyle}>
						<canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
					</div>
				</Flex>
				<Flex direction="row">
					<div style={{ width: '20px' }}>&nbsp;</div>
					<div style={xAxisStyle}>{xLabel}</div>
				</Flex>
			</Flex>
		</View>
	);
}

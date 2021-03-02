import { ChannelAddress } from '@wuespace/telestion-client-types';

import { SpectrumColor } from '../../model/spectrum-color';
import { useSpectrumColor, useCanvas } from '../hooks';
import { useAmplitudes } from './use-amplitudes';

export interface CanvasRendererProps {
	channel: ChannelAddress;

	width: number;

	height: number;

	stroke: SpectrumColor;

	minValue: number;

	maxValue: number;
}

export function CanvasRenderer({
	channel,
	width,
	height,
	stroke,
	minValue,
	maxValue
}: CanvasRendererProps) {
	const amplitudes = useAmplitudes(channel, width);
	const [strokeColor] = useSpectrumColor([stroke]);

	const drawWaveform = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.lineWidth = 1;
		ctx.lineCap = 'round';
		ctx.strokeStyle = strokeColor;
		ctx.beginPath();
		for (let i = 0; i < amplitudes.length; i++) {
			ctx.moveTo(i, ctx.canvas.height);
			ctx.lineTo(
				i,
				ctx.canvas.height -
					(amplitudes[i] * ctx.canvas.height) / (maxValue - minValue)
			);
		}
		ctx.stroke();
	};

	const canvasRef = useCanvas(drawWaveform);

	return <canvas ref={canvasRef} width={width} height={height} />;
}

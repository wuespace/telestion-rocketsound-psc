import { useAmplitudes } from './use-amplitudes';
import { ChannelAddress } from '@wuespace/telestion-client-types';
import { useCanvas } from '../hooks';

export interface CanvasRendererProps {
	channel: ChannelAddress;
	width: number;
	height: number;
}

export function CanvasRenderer({
	channel,
	width,
	height
}: CanvasRendererProps) {
	const amplitudes = useAmplitudes(channel, width);

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

	return <canvas ref={canvasRef} width={width} height={height} />;
}

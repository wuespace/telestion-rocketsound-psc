import { useSpectrum } from './use-spectrum';
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
	const samples = Math.floor(width / 20);

	const spectrum = useSpectrum(channel, samples);

	const drawSpectrogram = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		spectrum.forEach((currentSpectrum, sampleIndex) => {
			currentSpectrum.data.forEach((rawIntensity, index) => {
				/**
				 * Intensity with 0..1 mapped to 0..255 for colors
				 */
				const intensity = (rawIntensity - currentSpectrum.min) * 255;

				ctx.fillStyle = `rgb(${intensity}, ${intensity}, ${intensity})`;

				const right = spectrum.length - sampleIndex - 1;

				ctx.fillRect(
					ctx.canvas.width - (right * ctx.canvas.width) / samples,
					(index * ctx.canvas.height) / currentSpectrum.data.length,
					ctx.canvas.width / samples,
					ctx.canvas.height / currentSpectrum.data.length
				);
			});
		});
	};

	const canvasRef = useCanvas(drawSpectrogram);

	return <canvas ref={canvasRef} width={width} height={height} />;

	// return <pre><code>{JSON.stringify(spectrumMessage, null, 2)}</code></pre>
}

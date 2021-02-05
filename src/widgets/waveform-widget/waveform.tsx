import { useColorScheme } from "@wuespace/telestion-client-common";
import React, { useEffect, useRef, useState } from "react";
import useCanvas from "./useCanvas";

type WaveformProps = {
	amplitude: number;
};

export function Waveform({ amplitude }: WaveformProps) {
	// const amplitudeBuffer = Buffer.alloc(30);
	const containerRef = useRef<HTMLDivElement>(null);
	const [canvasWidth, setCanvasWidth] = useState<number>(100);
	const [canvasHeight, setCanvasHeight] = useState<number>(100);
	const [amplitudes, setAmplitudes] = useState<number[]>([]);
	const { colorScheme } = useColorScheme((state) => ({
		colorScheme: state.colorScheme,
	}));

	const containerStyle: React.CSSProperties = {
		width: "100%",
		height: "100%",
		backgroundColor: colorScheme.match("dark") ? "gray" : "white",
		border: "1px dotted gray",
		display: "flex",
		alignItems: "center",
	};

	useEffect(() => {
		if (amplitudes.length < Math.floor(canvasWidth * 0.9)) {
			setAmplitudes((prevAmps) => [...prevAmps, amplitude]);
		} else {
			setAmplitudes((prevAmps) => {
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
		ctx.lineCap = "round";
		ctx.strokeStyle = "#452897";
		ctx.beginPath();
		for (let i = 0; i < amplitudes.length; i++) {
			ctx.moveTo(i, ctx.canvas.height / 2 + amplitudes[i]);
			ctx.lineTo(i, ctx.canvas.height / 2 - amplitudes[i]);
		}
		ctx.stroke();
	};

	const canvasRef = useCanvas(drawWaveform);

	return (
		<div ref={containerRef} style={containerStyle}>
			<canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
		</div>
	);
}

import { useRef, useEffect } from "react";

const useCanvas = (draw: (ctx: CanvasRenderingContext2D) => void) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");
		let animationFrameId: number;

		const render = () => {
			if (context) draw(context);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => window.cancelAnimationFrame(animationFrameId);
	}, [draw]);

	return canvasRef;
};

export default useCanvas;

import { useRef, useEffect } from 'react';

/**
 * The useCanvas hook takes a draw function with a CanvasRenderingContext2D and adds it to an AnimationFrame.
 *
 * @param draw
 */
const useCanvas = (draw: (ctx: CanvasRenderingContext2D) => void) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext('2d');
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

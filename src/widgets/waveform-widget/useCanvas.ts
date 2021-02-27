import { useRef, useEffect } from 'react';

/**
 * The useCanvas hook takes a draw function with a CanvasRenderingContext2D and adds it to an AnimationFrame.
 *
 *
 * @param draw
 * <p>
 *  Example of a draw function:
 *
 * <pre>
 * {@code
 * const drawLine = (ctx: CanvasRenderingContext2D) => {
 *		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
 *		ctx.lineWidth = 1;
 *		ctx.lineCap = 'round';
 *		ctx.strokeStyle = '#452897'; // line color
 *		ctx.beginPath();
 *		ctx.moveTo(0, 0); // starting point - top left
 *		ctx.lineTo(ctx.canvas.width, ctx.canvas.right); // end point - bottom right
 *		ctx.stroke(); // function to stroke a line
 *	};
 * }
 *
 * </pre>
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

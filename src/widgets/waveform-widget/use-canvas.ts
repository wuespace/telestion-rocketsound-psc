import { useRef, useEffect, MutableRefObject } from 'react';

export type Draw = (ctx: CanvasRenderingContext2D) => void;

/**
 * The useCanvas hook takes a draw function with a CanvasRenderingContext2D
 * and adds it to an AnimationFrame.
 * @param draw - a function to draw the canvas
 *
 * @example
 * ```ts
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
 * ```
 */
export function useCanvas(
	draw: Draw
): MutableRefObject<HTMLCanvasElement | null> {
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
}

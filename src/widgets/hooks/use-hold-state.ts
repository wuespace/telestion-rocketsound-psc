import { useCallback, useEffect, useState } from 'react';

/**
 * The return type of the {@link useHoldState} hook.
 */
export type HoldState<T> = readonly [
	holdData: T,
	hold: () => void,
	unHold: () => void,
	isHold: boolean
];

/**
 * Holds the given data and prevent updates if `isHold` is set.
 * The hold state can be changed with the two functions `hold` and `unHold`.
 *
 * @param data - the data to prevent from changes
 * @param initialHold - optional parameter
 * to specify initially if `isHold` is set
 * @returns the held data if `isHold` is set.
 *
 * @see {@link HoldState}
 *
 * @example
 * ```ts
 * function MyComponent({ rapidChangingData }: Props) {
 * 	const [holdData, hold, unHold, isHold] = useHoldState(rapidChangingData);
 *
 * 	return (
 * 		<div>
 * 			<button onClick={hold}>Hold data</button>
 * 			<button onClick={unHold}>Un-hold data</button>
 * 			<p>{holdData}</p>
 * 			<p>{isHold ? 'Currently on hold' : 'Currently updating'}</p>
 * 		</div>
 * 	);
 * }
 * ```
 */
export function useHoldState<T>(data: T, initialHold = false): HoldState<T> {
	const [holdData, setHoldData] = useState(data);
	const [isHold, setHold] = useState(initialHold);

	useEffect(() => {
		if (!isHold) setHoldData(data);
	}, [data, isHold]);

	const hold = useCallback(() => setHold(true), []);
	const unHold = useCallback(() => setHold(false), []);

	return [holdData, hold, unHold, isHold];
}

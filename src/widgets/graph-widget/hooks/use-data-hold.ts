import { DataSample } from '../model';
import { useCallback, useEffect, useState } from 'react';

export type DataHoldState = readonly [DataSample[], () => void, () => void];

export function useDataHold(data: DataSample[]): DataHoldState {
	const [displayed, setDisplayed] = useState(data);
	const [isHold, setHold] = useState(false);

	useEffect(() => {
		if (!isHold) setDisplayed(data);
	}, [data, isHold]);

	const hold = useCallback(() => setHold(true), []);
	const unHold = useCallback(() => setHold(false), []);

	return [displayed, hold, unHold];
}

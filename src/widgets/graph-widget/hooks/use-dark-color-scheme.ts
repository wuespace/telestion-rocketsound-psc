import { StateSelector } from 'zustand';
import {
	ColorSchemeState,
	useColorScheme
} from '@wuespace/telestion-client-common';

// color scheme selector
const selector: StateSelector<
	ColorSchemeState,
	ColorSchemeState['colorScheme']
> = state => state.colorScheme;

export function useDarkColorScheme(): boolean {
	const colorScheme = useColorScheme(selector);

	switch (colorScheme) {
		case 'system':
			return matchMedia('(prefers-color-scheme: dark)').matches;
		case 'light':
			return false;
		case 'dark':
			return true;
	}
}

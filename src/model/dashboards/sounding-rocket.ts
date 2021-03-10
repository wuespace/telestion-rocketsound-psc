import { Dashboard } from '@wuespace/telestion-client-types';
import { amplitudeGraph, velocityGraph } from './widget-props';

export const soundingRocketDashboard: Dashboard = {
	title: 'Sounding Rocket',
	columns: 12,
	rows: 12,
	widgets: [
		{
			widgetName: 'stateWidget',
			width: 2,
			height: 4,
			title: 'stateWidget'
		},
		{
			widgetName: 'graphWidget',
			width: 10,
			height: 4,
			title: 'Amplitude',
			initialProps: {
				...amplitudeGraph,
				maxDataSamples: 100,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'placeholderWidget',
			width: 2,
			height: 8,
			title: 'Placeholder'
		},
		{
			widgetName: 'spectrogramWidget',
			width: 10,
			height: 4,
			title: 'Spectrogram Widget'
		},
		{
			widgetName: 'graphWidget',
			width: 10,
			height: 4,
			title: 'Velocity',
			initialProps: {
				...velocityGraph,
				maxDataSamples: 100,
				isCartesianGrid: true
			}
		}
	]
};

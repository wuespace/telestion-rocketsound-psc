import { Dashboard } from '@wuespace/telestion-client-types';
import { altitudeGraph, pressureGraph, temperatureGraph } from './widget-props';

export const systemStateDashboard: Dashboard = {
	title: 'System State',
	columns: 12,
	rows: 12,
	widgets: [
		{
			widgetName: 'stateWidget',
			width: 4,
			height: 3,
			title: 'stateWidget'
		},
		{
			widgetName: 'graphWidget',
			width: 4,
			height: 6,
			title: 'Pressure',
			initialProps: {
				...pressureGraph,
				maxDataSamples: 60,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'mapWidget',
			width: 4,
			height: 12,
			title: 'GPS Data'
		},
		{
			widgetName: '9dof-widget',
			width: 4,
			height: 3,
			title: 'Current values'
		},

		{
			widgetName: 'graphWidget',
			width: 4,
			height: 6,
			title: 'Altitude',
			initialProps: {
				...altitudeGraph,
				maxDataSamples: 60,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'graphWidget',
			width: 4,
			height: 6,
			title: 'Temperature',
			initialProps: {
				...temperatureGraph,
				maxDataSamples: 60,
				isCartesianGrid: true
			}
		}
	]
};

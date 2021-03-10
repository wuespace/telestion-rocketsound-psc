import { Dashboard } from '@wuespace/telestion-client-types';
import {
	accLineGraph,
	altitudeGraph,
	amplitudeGraph,
	gyroLineGraph,
	magLineGraph,
	pressureGraph,
	temperatureGraph
} from './widget-props';

export const overviewDashboard: Dashboard = {
	title: 'Overview',
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
			width: 2,
			height: 4,
			title: 'Altitude',
			initialProps: {
				...altitudeGraph,
				maxDataSamples: 30,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'graphWidget',
			width: 2,
			height: 4,
			title: 'Pressure',
			initialProps: {
				...pressureGraph,
				maxDataSamples: 30,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'graphWidget',
			width: 2,
			height: 4,
			title: 'Temperature',
			initialProps: {
				...temperatureGraph,
				maxDataSamples: 30,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'mapWidget',
			width: 4,
			height: 8,
			title: 'GPS Data'
		},
		{
			widgetName: 'graphWidget',
			width: 4,
			height: 4,
			title: 'Amplitude',
			initialProps: {
				...amplitudeGraph,
				maxDataSamples: 60,
				isCartesianGrid: true
			}
		},
		{
			widgetName: 'spectrogramWidget',
			width: 4,
			height: 4,
			title: 'Spectrogram Widget'
		},
		{
			widgetName: '9dof-widget',
			width: 3,
			height: 4,
			title: 'Current values'
		},
		{
			widgetName: 'graphWidget',
			width: 3,
			height: 4,
			title: 'Accelerometer',
			initialProps: {
				...accLineGraph,
				maxDataSamples: 20
			}
		},
		{
			widgetName: 'graphWidget',
			width: 3,
			height: 4,
			title: 'Gyroscope',
			initialProps: {
				...gyroLineGraph,
				maxDataSamples: 20
			}
		},
		{
			widgetName: 'graphWidget',
			width: 3,
			height: 4,
			title: 'Magnetometer',
			initialProps: {
				...magLineGraph,
				maxDataSamples: 20
			}
		}
	]
};

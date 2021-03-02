import { UserConfig } from '@wuespace/telestion-client-types';

import {
	accLineGraph,
	altitudeGraph,
	detailsGraph,
	gyroLineGraph,
	magLineGraph,
	pressureGraph,
	temperatureGraph
} from './sample-graph-definitions';
import { Amplitude } from './channels';
import { WaveformWidgetProps } from '../widgets/waveform-widget';

const waveformProps: WaveformWidgetProps = {
	xLabel: 'Samples',
	yLabel: 'Amplitude',
	channel: Amplitude,
	stroke: 'purple-500',
	minValue: 0,
	maxValue: 20
};

export const userConfigOld: UserConfig = {
	admin: {
		dashboards: [
			{
				title: 'Overview',
				columns: 12,
				rows: 12,
				widgets: [
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
						initialProps: accLineGraph
					},
					{
						widgetName: 'graphWidget',
						width: 3,
						height: 4,
						title: 'Gyroscope',
						initialProps: gyroLineGraph
					},
					{
						widgetName: 'graphWidget',
						width: 3,
						height: 4,
						title: 'Magnetometer',
						initialProps: magLineGraph
					},
					{
						widgetName: 'graphWidget',
						width: 6,
						height: 4,
						title: 'Details',
						initialProps: detailsGraph
					},
					{
						widgetName: 'stateWidget',
						width: 2,
						height: 4,
						title: 'stateWidget'
					},
					{
						widgetName: 'mapwidget',
						width: 4,
						height: 8,
						title: 'GPS Data'
					},
					{
						widgetName: 'waveformWidget',
						width: 4,
						height: 4,
						title: 'Amplitude Waveform',
						initialProps: waveformProps
					}
				]
			}
		]
	}
};

export const userConfig: UserConfig = {
	admin: {
		dashboards: [
			{
				title: 'Overview',
				columns: 12,
				rows: 12,
				widgets: [
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
						initialProps: accLineGraph
					},
					{
						widgetName: 'graphWidget',
						width: 3,
						height: 4,
						title: 'Gyroscope',
						initialProps: gyroLineGraph
					},
					{
						widgetName: 'graphWidget',
						width: 3,
						height: 4,
						title: 'Magnetometer',
						initialProps: magLineGraph
					},
					{
						widgetName: 'graphWidget',
						width: 2,
						height: 4,
						title: 'Altitude',
						initialProps: altitudeGraph
					},
					{
						widgetName: 'graphWidget',
						width: 2,
						height: 4,
						title: 'Pressure',
						initialProps: pressureGraph
					},
					{
						widgetName: 'graphWidget',
						width: 2,
						height: 4,
						title: 'Temperature',
						initialProps: temperatureGraph
					},
					// {
					// 	widgetName: 'graphWidget',
					// 	width: 6,
					// 	height: 4,
					// 	title: 'Details',
					// 	initialProps: detailsGraph
					// },
					{
						widgetName: 'stateWidget',
						width: 2,
						height: 4,
						title: 'stateWidget'
					},
					{
						widgetName: 'mapwidget',
						width: 4,
						height: 8,
						title: 'GPS Data'
					},
					{
						widgetName: 'waveformWidget',
						width: 4,
						height: 4,
						title: 'Amplitude Waveform',
						initialProps: waveformProps
					},
					{
						widgetName: 'spectrogramWidget',
						width: 4,
						height: 4,
						title: 'Spectrogram Widget'
					}
				]
			}
		]
	}
};

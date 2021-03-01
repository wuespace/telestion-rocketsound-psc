import { UserConfig } from '@wuespace/telestion-client-types';
import {
	accLineGraph,
	detailsGraph,
	gyroLineGraph,
	magLineGraph
} from './sample-graph-definitions';

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
						width: 12,
						height: 4,
						title: 'Details',
						initialProps: detailsGraph
					},
					{
						widgetName: 'stateWidget',
						width: 3,
						height: 4,
						title: 'stateWidget'
					}
				]
			}
		]
	}
};

import { Dashboard } from '@wuespace/telestion-client-types';

export const recoveryDashboard: Dashboard = {
	title: 'Recovery',
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
			widgetName: 'mapWidget',
			width: 10,
			height: 12,
			title: 'GPS Position'
		},
		{
			widgetName: 'gpsDetailsWidget',
			width: 2,
			height: 5,
			title: 'GPS Details'
		}
	]
};

import { Dashboard } from '@wuespace/telestion-client-types';

export const recoveryDashboard: Dashboard = {
	title: 'Recovery',
	columns: 12,
	rows: 12,
	widgets: [
		{
			widgetName: 'mapWidget',
			width: 12,
			height: 12,
			title: 'GPS Position'
		}
	]
};

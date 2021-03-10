import { UserConfig } from '@wuespace/telestion-client-types';
import {
	overviewDashboard,
	recoveryDashboard,
	soundingRocketDashboard,
	systemStateDashboard
} from './dashboards';

export const userConfig: UserConfig = {
	admin: {
		dashboards: [
			overviewDashboard,
			soundingRocketDashboard,
			systemStateDashboard,
			recoveryDashboard
		]
	}
};

import { UserConfig } from '@wuespace/telestion-client-types';
import { NineDOF } from './channels';
import { WidgetProps } from '../widgets/graph-widget/model';

const accLineGraph: WidgetProps = {
	isArea: false,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'acc.x',
					title: 'Acc X',
					color: '#d21800',
					isDotted: true
				},
				{
					key: 'acc.y',
					title: 'Acc Y',
					color: '#00ec05',
					isDotted: true
				},
				{
					key: 'acc.y',
					title: 'Acc Z',
					color: '#0075ff',
					isDotted: true
				}
			]
		}
	]
};

export const userConfig: UserConfig = {
	admin: {
		dashboards: [
			{
				title: 'Overview',
				columns: 4,
				rows: 4,
				widgets: [
					{
						widgetName: 'sampleWidget',
						width: 4,
						height: 1,
						title: 'Widget 1'
					},
					{
						widgetName: '9dof',
						width: 2,
						height: 2,
						title: 'Widget 2'
					},
					{
						widgetName: 'lineGraphWidget',
						width: 2,
						height: 1,
						title: 'Widget 3',
						initialProps: accLineGraph
					},
					{
						widgetName: 'Widget4',
						width: 1,
						height: 1,
						title: 'Widget 4'
					},
					{
						widgetName: 'Widget5',
						width: 1,
						height: 2,
						title: 'Widget 5'
					},
					{
						widgetName: 'Widget6',
						width: 1,
						height: 3,
						title: 'Widget 6'
					}
				]
			}
		]
	}
};

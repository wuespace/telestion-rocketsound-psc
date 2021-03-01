import { UserConfig } from '@wuespace/telestion-client-types';
import { NineDOF } from './channels';
import { WidgetProps } from '../widgets/graph-widget/model';

const accLineGraph: WidgetProps = {
	isArea: false,
	isCartesianGrid: false,
	isHoldOnHover: true,
	maxDataSamples: 20,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].acc.x',
					title: 'Accelerometer X',
					color: '#d21800'
				},
				{
					key: 'result[0].acc.y',
					title: 'Accelerometer Y',
					color: '#00ec05'
				},
				{
					key: 'result[0].acc.z',
					title: 'Accelerometer Z',
					color: '#0075ff'
				}
			]
		}
	]
};

const gyroLineGraph: WidgetProps = {
	isArea: false,
	isCartesianGrid: false,
	isHoldOnHover: true,
	maxDataSamples: 20,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].gyro.x',
					title: 'Gyroscope X',
					color: '#d21800'
				},
				{
					key: 'result[0].gyro.y',
					title: 'Gyroscope Y',
					color: '#00ec05'
				},
				{
					key: 'result[0].gyro.z',
					title: 'Gyroscope Z',
					color: '#0075ff'
				}
			]
		}
	]
};

const magLineGraph: WidgetProps = {
	isArea: false,
	isCartesianGrid: false,
	isHoldOnHover: true,
	maxDataSamples: 20,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].mag.x',
					title: 'Magnetometer X',
					color: '#d21800'
				},
				{
					key: 'result[0].mag.y',
					title: 'Magnetometer Y',
					color: '#00ec05'
				},
				{
					key: 'result[0].mag.z',
					title: 'Magnetometer Z',
					color: '#0075ff'
				}
			]
		}
	]
};

const detailsGraph: WidgetProps = {
	isArea: true,
	isCartesianGrid: true,
	isHoldOnHover: true,
	maxDataSamples: 60,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].gyro.z',
					title: 'Gyroscope Z',
					color: '#6c18ba'
				},
				{
					key: 'result[0].acc.x',
					title: 'Accelerometer X',
					color: '#ec9401',
					isDotted: false,
					strokeWidth: 2
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
				columns: 12,
				rows: 12,
				widgets: [
					{
						widgetName: '9dof',
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
					}
				]
			}
		]
	}
};

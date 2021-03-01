import { GraphWidgetProps } from '../widgets/graph-widget';
import { NineDOF } from './channels';

export const accLineGraph: GraphWidgetProps = {
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

export const gyroLineGraph: GraphWidgetProps = {
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

export const magLineGraph: GraphWidgetProps = {
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

export const detailsGraph: GraphWidgetProps = {
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

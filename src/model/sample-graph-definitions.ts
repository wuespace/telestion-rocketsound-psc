import { GraphWidgetProps } from '../widgets/graph-widget';
import { BaroData, NineDOF } from './channels';

export const accLineGraph: GraphWidgetProps = {
	isArea: false,
	isCartesianGrid: false,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 20,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].acc.x',
					title: 'Accelerometer X',
					color: 'red-500'
				},
				{
					key: 'result[0].acc.y',
					title: 'Accelerometer Y',
					color: 'green-500'
				},
				{
					key: 'result[0].acc.z',
					title: 'Accelerometer Z',
					color: 'blue-500'
				}
			]
		}
	]
};

export const gyroLineGraph: GraphWidgetProps = {
	isArea: false,
	isCartesianGrid: false,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 20,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].gyro.x',
					title: 'Gyroscope X',
					color: 'red-500'
				},
				{
					key: 'result[0].gyro.y',
					title: 'Gyroscope Y',
					color: 'green-500'
				},
				{
					key: 'result[0].gyro.z',
					title: 'Gyroscope Z',
					color: 'blue-500'
				}
			]
		}
	]
};

export const magLineGraph: GraphWidgetProps = {
	isArea: false,
	isCartesianGrid: false,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 20,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].mag.x',
					title: 'Magnetometer X',
					color: 'red-500'
				},
				{
					key: 'result[0].mag.y',
					title: 'Magnetometer Y',
					color: 'green-500'
				},
				{
					key: 'result[0].mag.z',
					title: 'Magnetometer Z',
					color: 'blue-500'
				}
			]
		}
	]
};

export const altitudeGraph: GraphWidgetProps = {
	isArea: false,
	isCartesianGrid: true,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 60,
	connections: [
		{
			channel: BaroData,
			descriptors: [
				{
					key: 'result[0].alt.altitude',
					title: 'Altitude',
					color: 'purple-500'
				}
			]
		}
	]
};

export const pressureGraph: GraphWidgetProps = {
	isArea: false,
	isCartesianGrid: true,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 60,
	connections: [
		{
			channel: BaroData,
			descriptors: [
				{
					key: 'result[0].press.pressure',
					title: 'Pressure',
					color: 'seafoam-500'
				}
			]
		}
	]
};

export const temperatureGraph: GraphWidgetProps = {
	isArea: false,
	isCartesianGrid: true,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 60,
	connections: [
		{
			channel: BaroData,
			descriptors: [
				{
					key: 'result[0].temp.temperature',
					title: 'Temperature',
					color: 'celery-500'
				}
			]
		}
	]
};

export const detailsGraph: GraphWidgetProps = {
	isArea: true,
	isCartesianGrid: true,
	isHoldOnHover: true,
	isTooltip: true,
	maxDataSamples: 60,
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].gyro.z',
					title: 'Gyroscope Z',
					color: 'purple-500'
				},
				{
					key: 'result[0].acc.x',
					title: 'Accelerometer X',
					color: 'orange-500',
					isDotted: false,
					strokeWidth: 2
				}
			]
		}
	]
};

import { GraphWidgetProps } from '../../../widgets/graph-widget';
import { Amplitude, BaroData, NineDOF, Velocity } from '../../channels';

export const accLineGraph: GraphWidgetProps = {
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].acc.x',
					title: 'Accelerometer X',
					unit: 'm/s²',
					color: 'red-500'
				},
				{
					key: 'result[0].acc.y',
					title: 'Accelerometer Y',
					unit: 'm/s²',
					color: 'green-500'
				},
				{
					key: 'result[0].acc.z',
					title: 'Accelerometer Z',
					unit: 'm/s²',
					color: 'blue-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

export const gyroLineGraph: GraphWidgetProps = {
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].gyro.x',
					title: 'Gyroscope X',
					unit: '°/s',
					color: 'red-500'
				},
				{
					key: 'result[0].gyro.y',
					title: 'Gyroscope Y',
					unit: '°/s',
					color: 'green-500'
				},
				{
					key: 'result[0].gyro.z',
					title: 'Gyroscope Z',
					unit: '°/s',
					color: 'blue-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

export const magLineGraph: GraphWidgetProps = {
	connections: [
		{
			channel: NineDOF,
			descriptors: [
				{
					key: 'result[0].mag.x',
					title: 'Magnetometer X',
					unit: 'Gauß',
					color: 'red-500'
				},
				{
					key: 'result[0].mag.y',
					title: 'Magnetometer Y',
					unit: 'Gauß',
					color: 'green-500'
				},
				{
					key: 'result[0].mag.z',
					title: 'Magnetometer Z',
					unit: 'Gauß',
					color: 'blue-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

export const altitudeGraph: GraphWidgetProps = {
	connections: [
		{
			channel: BaroData,
			descriptors: [
				{
					key: 'result[0].alt.altitude',
					title: 'Altitude',
					unit: 'm',
					color: 'purple-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

export const pressureGraph: GraphWidgetProps = {
	connections: [
		{
			channel: BaroData,
			descriptors: [
				{
					key: 'result[0].press.pressure',
					title: 'Pressure',
					unit: 'Pa',
					color: 'seafoam-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

export const temperatureGraph: GraphWidgetProps = {
	connections: [
		{
			channel: BaroData,
			descriptors: [
				{
					key: 'result[0].temp.temperature',
					title: 'Temperature',
					unit: '°C',
					color: 'celery-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

export const amplitudeGraph: GraphWidgetProps = {
	connections: [
		{
			channel: Amplitude,
			descriptors: [
				{
					key: 'result[0].freq1',
					title: 'Frequency 1',
					color: 'red-500',
					isDashed: true,
					strokeWidth: 2
				},
				{
					key: 'result[0].freq2',
					title: 'Frequency 2',
					color: 'blue-500',
					isDashed: true,
					strokeWidth: 2
				},
				{
					key: 'result[0].amplitude',
					title: 'Amplitude',
					color: 'gray-900'
				}
			]
		}
	],
	maxDataSamples: 20,
	scale: 'log'
};

export const velocityGraph: GraphWidgetProps = {
	connections: [
		{
			channel: Velocity,
			descriptors: [
				{
					key: 'result[0].estimated',
					title: 'Estimated',
					unit: 'm/s',
					color: 'indigo-500',
					isDashed: true,
					strokeWidth: 2
				},
				{
					key: 'result[0].measured',
					title: 'Measured',
					unit: 'm/s',
					color: 'orange-500'
				}
			]
		}
	],
	maxDataSamples: 20
};

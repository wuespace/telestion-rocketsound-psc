import chalk from 'chalk';
import { Logger, ChalkLogger } from '@fliegwerk/logsemts';
import {
	ChannelAddress,
	JsonSerializable
} from '@wuespace/telestion-client-types';
import { MockServer, OnClose, OnInit } from '@wuespace/vertx-mock-server';

import {
	AmplitudeMessage,
	BaroDataMessage,
	FlightStateMessage,
	SpectrumMessage
} from '../model/messages';
import { Amplitude, BaroData, FlightState, Spectrum } from '../model/channels';

class RocketSoundMockServer extends MockServer implements OnInit, OnClose {
	intervalId: any;

	readonly amplitudeData: Array<AmplitudeMessage> = [
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.sound.Amplitude',
			result: [
				{
					amplitude: 3,
					freq1: 0,
					freq2: 1,
					className: 'de.jvpichowski.rocketsound.messages.sound.Amplitude'
				}
			]
		},
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.sound.Amplitude',
			result: [
				{
					amplitude: 5,
					freq1: 2,
					freq2: 4,
					className: 'de.jvpichowski.rocketsound.messages.sound.Amplitude'
				}
			]
		},
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.sound.Amplitude',
			result: [
				{
					amplitude: 7,
					freq1: 2,
					freq2: 0,
					className: 'de.jvpichowski.rocketsound.messages.sound.Amplitude'
				}
			]
		}
	];
	currentAmplitude = 0;

	readonly flightStates: Array<FlightStateMessage> = [
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.base.FlightState',
			result: [
				{
					state: 2,
					name: 'Preflight',
					className: 'de.jvpichowski.rocketsound.messages.base.FlightState'
				}
			]
		},
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.base.FlightState',
			result: [
				{
					state: 3,
					name: 'Apogee',
					className: 'de.jvpichowski.rocketsound.messages.base.FlightState'
				}
			]
		}
	];
	currentFlightState = 0;

	readonly baroData: Array<BaroDataMessage> = [
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.base.BaroData',
			result: [
				{
					alt: {
						altitude: 5,
						className: 'de.jvpichowski.rocketsound.messages.base.Altitude'
					},
					press: {
						pressure: 3,
						className: 'de.jvpichowski.rocketsound.messages.base.Pressure'
					},
					temp: {
						temperature: 100,
						className: 'de.jvpichowski.rocketsound.messages.base.Temperature'
					},
					className: 'de.jvpichowski.rocketsound.messages.base.BaroData'
				}
			]
		},
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.base.BaroData',
			result: [
				{
					alt: {
						altitude: 7,
						className: 'de.jvpichowski.rocketsound.messages.base.Altitude'
					},
					press: {
						pressure: 2,
						className: 'de.jvpichowski.rocketsound.messages.base.Pressure'
					},
					temp: {
						temperature: 80,
						className: 'de.jvpichowski.rocketsound.messages.base.Temperature'
					},
					className: 'de.jvpichowski.rocketsound.messages.base.BaroData'
				}
			]
		}
	];
	currentBaroData = 0;

	readonly spectrumData: Array<SpectrumMessage> = [
		{
			className: 'org.telestion.core.database.DbResponse',
			dataType: 'de.jvpichowski.rocketsound.messages.sound.Spectrum',
			result: [
				{
					min: 0.1,
					max: 1,
					data: new Array(40).fill(0).map(() => Math.random()),
					className: 'de.jvpichowski.rocketsound.messages.sound.Spectrum'
				}
			]
		}
	];
	currentSpectrum = 0;

	onInit() {
		this.intervalId = setInterval(() => {
			this.currentAmplitude = this.sendMessage(
				this.currentAmplitude,
				Amplitude,
				this.amplitudeData
			);
			this.currentFlightState = this.sendMessage(
				this.currentFlightState,
				FlightState,
				this.flightStates
			);
			this.currentBaroData = this.sendMessage(
				this.currentBaroData,
				BaroData,
				this.baroData
			);
			this.currentSpectrum = this.sendMessage(
				this.currentSpectrum,
				Spectrum,
				this.spectrumData
			);
		}, 1000); // send every 1 second new data
	}

	onClose() {
		clearInterval(this.intervalId);
	}

	private sendMessage(
		current: number,
		channel: ChannelAddress,
		data: Array<JsonSerializable>
	): number {
		if (data.length === 0) throw new Error('Data is empty');
		if (current + 1 >= data.length) current = 0;
		else current += 1;

		this.send(channel, data[current]);

		return current;
	}
}

const logger = new Logger({
	loggers: [ChalkLogger(chalk)]
});

export function onReady() {
	if (
		process.env.NODE_ENV !== 'production' &&
		process.env.MOCK_SERVER === 'true'
	) {
		const server = new RocketSoundMockServer({
			// logger: logger.getComponentLogger('Mock Server')
		});
		server.listen({ port: 9870, hostname: '0.0.0.0' });
	}
}

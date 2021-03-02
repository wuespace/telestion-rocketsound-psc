import http from 'http';
import sockjs from 'sockjs';
import {
	Amplitude,
	BaroData,
	DataMessage,
	FlightState,
	Spectrum
} from '../model/channels';
import { SpectrumMessage } from '../model/messages/spectrum';

import { AmplitudeMessage, FlightStateMessage } from '../model/messages';
import { BaroDataData } from '../model/messages/baro-data';

export function onReady() {
	if (
		process.env.NODE_ENV !== 'production' &&
		process.env.MOCK_SERVER === 'true'
	) {
		console.log('listening');

		// change channel address HERE
		const address = Amplitude;

		// add messages HERE (will loop around)
		const messages: AmplitudeMessage[] = [
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						amplitude: 3,
						className: 'hello'
					}
				]
			},
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						amplitude: 5,
						className: 'hello'
					}
				]
			},
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						amplitude: 8,
						className: 'hello'
					}
				]
			},
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						amplitude: 10,
						className: 'hello'
					}
				]
			},
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						amplitude: 4,
						className: 'hello'
					}
				]
			}
		];

		const flightState: FlightStateMessage = {
			dataType: 'abc',
			className: 'abc',
			result: [
				{
					state: 2,
					name: 'Help me'
				}
			]
		};

		// implementation
		const eventBus = sockjs.createServer();
		eventBus.on('connection', connection => {
			// per connection scope
			let pos = 0;
			const id = setInterval(() => {
				const message = {
					type: 'rec', // receive on the frontend side
					address,
					body: messages[pos]
				};

				// next message + loop around on end of array
				pos = (pos + 1) % messages.length;

				const bare = JSON.stringify(message);

				connection.write(bare); // stringify entire message!
				console.log('<---   Message sent     -', bare);

				const message2 = {
					type: 'rec',
					address: FlightState,
					body: flightState
				};

				const bare2 = JSON.stringify(message2);

				connection.write(bare2); // stringify entire message!
				console.log('<---   Message sent     -', bare2);

				const baroDataState: DataMessage<BaroDataData> = {
					result: [
						{
							alt: { altitude: 5 },
							press: { pressure: 3 },
							temp: { temperature: 100 }
						}
					],
					className: 'a',
					dataType: 'a'
				};

				const message4 = {
					type: 'rec',
					address: BaroData,
					body: baroDataState
				};

				const bare4 = JSON.stringify(message4);

				connection.write(bare4); // stringify entire message!
				console.log('<---   Message sent     -', bare4);

				const spectrumMessage: SpectrumMessage = {
					dataType: 'abc',
					className: 'abc',
					result: [
						{
							min: 0.1,
							max: 1,
							data: new Array(40).fill(0).map(() => Math.random())
						}
					]
				};

				const message3 = {
					type: 'rec',
					address: Spectrum,
					body: spectrumMessage
				};
				connection.write(JSON.stringify(message3)); // stringify entire message!
				console.log('<---   Message sent     -', JSON.stringify(message3));
			}, 400); // sends message every 0.4 seconds

			connection.on('data', message => {
				console.log('--->   Message received -', message);
			});

			connection.on('close', () => {
				console.log('XXXX   Connection closed');
				clearInterval(id);
			});

			console.log('++++   Connection opened');
		});

		const server = http.createServer();
		eventBus.installHandlers(server, { prefix: '/bridge' });

		server.listen(9870, '0.0.0.0');
	}
}

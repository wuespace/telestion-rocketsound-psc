import http from 'http';
import sockjs from 'sockjs';
import { Amplitude, FlightState, NineDOF } from '../model/channels';
import { NineDofMessage } from '../model/messages/nine-dof';
import { AmplitudeMessage } from '../model/messages/amplitude';
import { FlightStateMessage } from '../model/messages/flight-state';

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
			}, 2000); // sends message every 2 seconds

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

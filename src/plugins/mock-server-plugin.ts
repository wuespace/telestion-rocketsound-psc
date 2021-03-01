import http from 'http';
import sockjs from 'sockjs';
import { NineDOF } from '../model/channels';
import { NineDofMessage } from '../model/messages/nine-dof';

export function onReady() {
	if (
		process.env.NODE_ENV !== 'production' &&
		process.env.MOCK_SERVER === 'true'
	) {
		console.log('listening');

		// change channel address HERE
		const address = NineDOF;

		// add messages HERE (will loop around)
		const messages: NineDofMessage[] = [
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						acc: { x: 1, y: 2, z: 3 },
						gyro: { x: 1, y: 2, z: 3 },
						mag: { x: 1, y: 2, z: 3 }
					}
				]
			},
			{
				className: 'abc',
				dataType: 'abc',
				result: [
					{
						acc: { x: 3, y: 2, z: 3 },
						gyro: { x: 3, y: 2, z: 3 },
						mag: { x: 3, y: 2, z: 3 }
					}
				]
			}
		];

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

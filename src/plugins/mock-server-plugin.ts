import { VertxMockServer } from '@wuespace/vertx-mock-server';

const server = new VertxMockServer();

export function onReady() {
	if (
		process.env.NODE_ENV !== 'production' &&
		process.env.MOCK_SERVER === 'true'
	) {
		console.log('listening');
		server.listen();
	}
}

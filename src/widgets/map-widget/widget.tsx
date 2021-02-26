import { useChannelLatest } from '@wuespace/telestion-client-core';

import {
	CircleMarker,
	MapContainer,
	TileLayer,
	MapConsumer
} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { LatLng, LatLngBounds } from 'leaflet';
import { JsonSerializable } from '@wuespace/telestion-client-types';
import { Switch } from '@adobe/react-spectrum';
import { Flex } from '@adobe/react-spectrum';
import { Heading } from '@adobe/react-spectrum';
import { Divider } from '@adobe/react-spectrum';
import { useState } from 'react';

interface DataMessage<T extends JsonSerializable> {
	[key: string]: JsonSerializable;
	dataType: string;
	result: T[];
	className: string;
}

interface Position {
	[key: string]: JsonSerializable;
	satCount: number;
	fix: number;
	north: number;
	east: number;
	time: number;
	className: string;
}

export const MONGODB_NEW =
	'org.telestion.core.database.MongoDatabaseService/out#save';

export function Widget() {
	const latestMessage = useChannelLatest<DataMessage<Position>>(
		MONGODB_NEW + '/de.jvpichowski.rocketsound.messages.base.GpsData'
	);

	let [isBounded, setBounded] = useState(true);

	const bounds = isBounded ? mapBounds : noBounds;

	return (
		<Flex direction={'column'} height={'100%'} gap={'size-100'}>
			<Flex
				direction={'row'}
				alignItems={'center'}
				justifyContent={'space-between'}
				marginStart={'size-100'}
			>
				<Heading>Map</Heading>
				<Switch isSelected={expertMode} onChange={setexpertMode}>
					Expert Mode (disable boundaries)
				</Switch>
			</Flex>
			<Divider />
			<MapContainer
				style={{ height: '100%' }}
				center={[49.705638, 9.890828]}
				zoom={10}
				minZoom={10}
				maxZoom={15}
			>
				<MapConsumer>
					{map => {
						map.setMaxBounds(bounds);
						return null;
					}}
				</MapConsumer>
				<TileLayer
					attribution="&copy;"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<TileLayer
					attribution="&copy;"
					url="http://localhost:4400/tiles/{z}/{x}/{y}.png"
				/>
				{latestMessage && (
					<CircleMarker
						center={[
							latestMessage?.result[0].north,
							latestMessage?.result[0].east
						]}
						radius={10}
					/>
				)}
			</MapContainer>
		</Flex>
	);
}
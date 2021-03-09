import { useState } from 'react';
import { useChannelLatest } from '@wuespace/telestion-client-core';
import { Flex, Heading, Switch } from '@adobe/react-spectrum';
import { LatLng, LatLngBounds, Map } from 'leaflet';
import {
	CircleMarker,
	MapContainer,
	TileLayer,
	MapConsumer
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import { GpsDataMessage } from '../../model/messages';
import { GpsData } from '../../model/channels';

const noBounds = new LatLngBounds(new LatLng(180, 180), new LatLng(-180, -180));
const mapBounds = new LatLngBounds(
	new LatLng(49.747112, 9.958076),
	new LatLng(49.65585, 9.798088)
);

const mapCenter = new LatLng(49.705638, 9.890828);

export function Widget() {
	const latestMessage = useChannelLatest<GpsDataMessage>(GpsData);

	let [isBounded, setBounded] = useState(true);

	const bounds = isBounded ? mapBounds : noBounds;

	return (
		<Flex direction="column" height="100%">
			<Flex
				direction="row"
				alignItems="center"
				justifyContent="space-between"
				marginStart="size-200"
			>
				<Heading>Map</Heading>
				<Switch isSelected={!isBounded} onChange={state => setBounded(!state)}>
					Expert Mode (disable boundaries)
				</Switch>
			</Flex>
			<MapContainer
				style={{ height: '100%' }}
				center={mapCenter}
				zoom={10}
				minZoom={10}
				maxZoom={15}
			>
				<MapConsumer>
					{(map: Map) => {
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
							latestMessage?.result[0].latitude,
							latestMessage?.result[0].longitude
						]}
						radius={10}
					/>
				)}
			</MapContainer>
		</Flex>
	);
}

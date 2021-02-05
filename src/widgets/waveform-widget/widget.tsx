import { Content, Heading } from "@adobe/react-spectrum";
import { useChannelLatest } from "@wuespace/telestion-client-core";
import { MONGODB_NEW } from "../../model/channels";
import { useState } from "react";
import { Waveform } from "./waveform";
import { useEffect } from "react";

export function Widget() {
	const latestData = useChannelLatest(
		MONGODB_NEW + "/de.jvpichowski.rocketsound.messages.sound.Amplitude"
	);
	const [amplitude, setAmplitude] = useState<number>(2.4);

	useEffect(() => {
		// TODO: remove interval and use amplitude data from latestData
		let interval = setInterval(() => {
			let newAmp = Math.random() * (Math.random() * 3) * 20;
			setAmplitude(newAmp);
		}, 166);
	}, []);

	return (
		<div>
			<Content>
				<Heading level={4}>Signal 1</Heading>
				<Waveform amplitude={amplitude} />
			</Content>
		</div>
	);
}

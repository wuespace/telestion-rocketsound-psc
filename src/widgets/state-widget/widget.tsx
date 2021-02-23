import {
	Heading,
	View,
	Content,
	Divider,
	Flex,
	Text
} from '@adobe/react-spectrum';
import { Badge } from './Badge';

export function Widget() {
	//Empfangen: record mit int drin
	var i: number = 0;
	var istrue: boolean = true;
	const state = 'defaultState'; //mockup Konstante
	const nextState = 'nextState'; //mockup Konstante
	const Tagname = 'Flight'; //mockup Konstante
	//(flight: rote(negative?) bordercolour, preflight/afterflight: light bordercolour)

	switch (i) {
		case 1: {
			break;
		}
		case 2: {
			break;
		}
		case 3: {
			break;
		}
		case 4: {
			break;
		}
		case 5: {
			break;
		}
	}

	return (
		<View padding="size-250">
			<Flex direction="column" alignItems="start">
				<Heading level={2}>State Machine State </Heading>

				<Divider size="M" marginY="single-line-height" />

				<Text marginY="size-50"> Current State: </Text>

				<Flex gap="size-400">
					<Content marginY="size-100" UNSAFE_style={{ fontSize: '1.5em' }}>
						{state}
					</Content>
					<Badge special={istrue}> {Tagname} </Badge>
				</Flex>

				<Divider size="M" marginY="single-line-height" />

				<Text marginY="size-50"> Next State: </Text>
				<Content marginY="size-100" UNSAFE_style={{ fontSize: '1.5em' }}>
					{nextState}
				</Content>
			</Flex>
		</View>
	);
}

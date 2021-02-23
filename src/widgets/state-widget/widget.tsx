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
	//Received: record with an int corresponding to a state
	var i: number = 1;

	var state: string = 'defaultState';
	var nextState: string = 'nextState';
	var Tagname: string = 'Tag';
	var istrue: boolean = false; //true = red border in tag, false = grey

	switch (i) {
		case 1: {
			state = 'Preparation';
			nextState = 'Flying';
			Tagname = 'Preflight';
			istrue = false;
			break;
		}
		case 2: {
			state = 'Flying';
			nextState = 'Apogee';
			Tagname = 'Flight';
			istrue = true;
			break;
		}
		case 3: {
			state = 'Apogee';
			nextState = 'Falling';
			Tagname = 'Flight';
			istrue = true;
			break;
		}
		case 4: {
			state = 'Falling';
			nextState = 'Landed';
			Tagname = 'Flight';
			istrue = true;
			break;
		}
		case 5: {
			state = 'Landed';
			nextState = '-';
			Tagname = 'Afterflight';
			istrue = false;
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

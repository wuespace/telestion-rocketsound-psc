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
	const state = 'defaultState'; //mockup Konstante
	const nextState = 'nextState'; //mockup Konstante
	const Tagname = 'Flight'; //mockup Konstante
	//(flight: rote(negative?) bordercolour, preflight/afterflight: light bordercolour)

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
					<Badge special={true}> {Tagname} </Badge>
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

import {
	Heading,
	View,
	Content,
	Divider,
	Flex,
	Text
} from '@adobe/react-spectrum';
import { Badge } from './Badge';
import { State } from './state.model';

export interface StateDisplayProps {
	state: State;
}

export function StateDisplay({ state }: StateDisplayProps) {
	return (
		<View padding="size-250">
			<Flex direction="column" alignItems="start">
				<Heading level={2}>State Machine State </Heading>

				<Divider size="M" marginY="single-line-height" />

				<Text marginY="size-50"> Current State: </Text>

				<Flex gap="size-400">
					<Content marginY="size-100" UNSAFE_style={{ fontSize: '1.5em' }}>
						{state.currentState}
					</Content>
					<Badge special={state.isSpecial}> {state.tagName} </Badge>
				</Flex>

				<Divider size="M" marginY="single-line-height" />

				<Text marginY="size-50"> Next State: </Text>
				<Content marginY="size-100" UNSAFE_style={{ fontSize: '1.5em' }}>
					{state.nextState}
				</Content>
			</Flex>
		</View>
	);
}

import { Divider, Flex, Heading, Text, View } from '@adobe/react-spectrum';
import React from 'react';
import { Badge } from './badge';

export function Widget() {
	return (
		<View padding={'single-line-height'}>
			<StateMachine
				currentState={'Preparation'}
				nextState={'Flying'}
				stateClass={'Preflight'}
			/>
		</View>
	);
}

type StateMachineArgs = {
	/**
	 * The name of the current state
	 */
	currentState?: string;
	/**
	 * The name of the next state
	 */
	nextState?: string;
	/**
	 * The name of the state class (a more general state description like "Pre-Flight", "Flight", and "Post-Flight"
	 *
	 * The badge will have special indication when `stateClass === 'Flight'`, rendering it in red for special attention.
	 */
	stateClass?: string;
};

/**
 * Presentational component for the State Machine Widget
 */
export function StateMachine({
	currentState,
	nextState,
	stateClass
}: StateMachineArgs): JSX.Element {
	return (
		<>
			<Heading level={2}>State Machine State</Heading>
			<Divider size={'M'} />
			<Heading level={3}>Current state:</Heading>
			<Flex direction={'row'} alignItems={'center'} gap={'single-line-height'}>
				<Text UNSAFE_style={{ fontSize: '1.3em' }}>{currentState}</Text>
				<Badge special={stateClass === 'Flight'}>{stateClass}</Badge>
			</Flex>
			<Divider marginTop={'single-line-height'} size={'M'} />
			<Heading level={3}>Next state:</Heading>
			<Text UNSAFE_style={{ fontSize: '1.3em' }}>{nextState}</Text>
		</>
	);
}

StateMachine.defaultProps = {
	currentState: 'n/a',
	nextState: 'n/a',
	stateClass: 'n/a'
};

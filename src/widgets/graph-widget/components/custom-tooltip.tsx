import { Heading, View } from '@adobe/react-spectrum';
import { roundTo } from '../../lib';

export interface CustomTooltipProps {
	active: boolean;
	payload: Array<any>;
	label: number;
}

export function CustomTooltip({ active, label, payload }: CustomTooltipProps) {
	if (active && payload && payload.length) {
		return (
			<View
				backgroundColor="gray-200"
				padding="size-100"
				borderRadius="regular"
			>
				<Heading level={4} marginTop="size-0" marginBottom="size-100">
					Time: {roundTo(label, 2)}s
				</Heading>
				{payload.map(({ name, value }) => (
					<div>
						{name}: {roundTo(value, 4)}
					</div>
				))}
			</View>
		);
	}

	return null;
}

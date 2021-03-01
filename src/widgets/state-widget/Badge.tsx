import { View } from '@adobe/react-spectrum';
import { ReactNode } from 'react';

export interface BadgeProps {
	label: string;
}

export function Badge({
	special,
	children
}: {
	special: boolean;
	children: ReactNode;
}) {
	return (
		<View
			borderWidth={'thick'}
			borderColor={special ? 'red-500' : 'gray-400'}
			borderRadius={'regular'}
			paddingX={'size-150'}
			paddingY={'size-150 '}
		>
			{children}
		</View>
	);
}

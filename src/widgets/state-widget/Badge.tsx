import { View } from '@adobe/react-spectrum';
import { ViewProps } from '@react-types/view';
import { ReactNode } from 'react';

export interface BadgeProps {
	label: string;

	backgroundColor: ViewProps['backgroundColor'];
}

export function Badge({
	special,
	children
}: {
	special: boolean;
	children: ReactNode;
}): JSX.Element {
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

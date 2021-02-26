import React, { ReactNode } from 'react';
import { View } from '@adobe/react-spectrum';

type BadgeProps = {
	/**
	 * if true, the border will be drawn in red to add special priority to the badge
	 */
	special?: boolean;
	/**
	 * the children that get displayed. Typically, this is just a string
	 */
	children: ReactNode;
};

/**
 * A simple badge that can be used to indicate a status
 */
export function Badge({ special, children }: BadgeProps): JSX.Element {
	return (
		<View
			borderWidth={'thick'}
			borderColor={special ? 'red-500' : 'gray-400'}
			borderRadius={'regular'}
			paddingX={'size-100'}
			paddingY={'size-50'}
			backgroundColor={'gray-50'}
		>
			{children}
		</View>
	);
}

Badge.defaultProps = { special: false };

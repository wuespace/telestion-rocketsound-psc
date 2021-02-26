import '../src/index.css';
import {
	defaultTheme,
	Provider,
	View,
	Content,
	Flex
} from '@adobe/react-spectrum';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: { expanded: true },
	layout: 'centered'
};

export const decorators = [
	Story => (
		<Provider UNSAFE_style={{ borderRadius: '8px' }} theme={defaultTheme}>
			<Flex>
				<View padding={'single-line-height'}>{Story()}</View>
			</Flex>
		</Provider>
	)
];

import { Widget } from '@wuespace/telestion-client-types';
import { Widget as WidgetRenderer } from './widget';
import { WidgetProps } from './model';

export const widget: Widget<WidgetProps> = {
	name: 'graphWidget',
	Widget: WidgetRenderer
};

export type { WidgetProps as GraphWidgetProps } from './model';

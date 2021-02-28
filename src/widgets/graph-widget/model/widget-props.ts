import { GenericProps } from '@wuespace/telestion-client-types';
import { ChartConnection } from './chart-connection';

export interface WidgetProps extends GenericProps {
	isArea: boolean;
	connections: ChartConnection[];
}

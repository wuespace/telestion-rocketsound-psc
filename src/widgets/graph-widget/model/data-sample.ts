/**
 * A simple data sample which holds all values of a specific time tag.
 * It is typically used in a chart component to display the stored values.
 */
export interface DataSample {
	time: number;
	[key: string]: number;
}

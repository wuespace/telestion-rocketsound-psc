export type ColumnKey = string;

/**
 * A table column.
 */
export interface Column {
	/**
	 * The key of the table column.
	 */
	key: ColumnKey;

	/**
	 * The name/title of the table column.
	 */
	name: string | JSX.Element;
}

export type ItemValue = string | number | boolean;

/**
 * A table item.
 */
export type Item = {
	/**
	 * Unique key of the table item.
	 */
	key: string;
} & Record<ColumnKey, ItemValue>;

export function roundTo(num: number, digits: number): number {
	return Math.round(num * 10 ** digits) / 10 ** digits;
}

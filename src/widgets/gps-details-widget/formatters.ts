/**
 * Converts the angle phi to a readable string in degrees, minutes and seconds.
 * @param phi - the latitude angle
 * @param fractionDigits - the number of fraction digits to display
 * @returns the readable string in degrees, minutes and seconds
 */
export function printLatitude(phi: number, fractionDigits = 1): string {
	const abs = Math.abs(phi);
	const angle = Math.floor(abs);
	const minutes = Math.floor((abs - angle) * 60);
	const seconds = ((abs - angle) * 60 - minutes) * 60;

	return `${angle}° ${minutes}′ ${seconds.toFixed(fractionDigits)}″ ${
		phi < 0 ? 'S' : 'N'
	}`;
}

/**
 * Converts the angle lambda to a readable string in degrees, minutes and seconds.
 * @param lambda - the longitude angle
 * @param fractionDigits - the number of fraction digits to display
 * @returns the readable string in degrees, minutes and seconds
 */
export function printLongitude(lambda: number, fractionDigits = 1): string {
	const abs = Math.abs(lambda);
	const angle = Math.floor(abs);
	const minutes = Math.floor((abs - angle) * 60);
	const seconds = ((abs - angle) * 60 - minutes) * 60;

	return `${angle}° ${minutes}′ ${seconds.toFixed(fractionDigits)}″ ${
		lambda < 0 ? 'W' : 'E'
	}`;
}

export function getFormattedTimeString(date: Date): string {
	const parts = date.toISOString().split('T');
	return parts[0] + 'T ' + parts[1];
}

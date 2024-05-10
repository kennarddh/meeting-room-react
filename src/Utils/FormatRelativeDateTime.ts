const units = {
	year: 24 * 60 * 60 * 1000 * 365,
	month: (24 * 60 * 60 * 1000 * 365) / 12,
	day: 24 * 60 * 60 * 1000,
	hour: 60 * 60 * 1000,
	minute: 60 * 1000,
	second: 1000,
} as const

const formatter = new Intl.RelativeTimeFormat('en-US', { style: 'long' })

const FormatRelativeDateTime = (millis: number): string => {
	console.log({ millis })
	for (const [unit, divisor] of Object.entries(units))
		if (Math.abs(millis) > divisor || unit === 'second')
			return formatter.format(Math.round(millis / divisor), unit as any) // Can't cast to RelativeTimeFormatUnit for some reason.

	return 'Unknown Unit'
}

export default FormatRelativeDateTime

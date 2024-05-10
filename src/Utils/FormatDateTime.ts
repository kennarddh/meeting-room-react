const FormatDateTime = (date: Date): string => {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full',
		timeStyle: 'short',
	}).format(date)
}

export default FormatDateTime

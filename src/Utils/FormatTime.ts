const FormatTime = (date: Date): string => {
	return new Intl.DateTimeFormat('en-US', {
		timeStyle: 'short',
	}).format(date)
}

export default FormatTime

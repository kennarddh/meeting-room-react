const FormatDate = (date: Date): string => {
	return new Intl.DateTimeFormat('en-US', {
		dateStyle: 'full',
	}).format(date)
}

export default FormatDate

import { FC } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCalendar, faX } from '@fortawesome/free-solid-svg-icons'

import { StyledDateTimePicker } from './Styles'
import { IDateTimePicker } from './Types'

const DateTimePicker: FC<IDateTimePicker> = props => {
	return (
		<StyledDateTimePicker
			calendarIcon={
				<FontAwesomeIcon icon={faCalendar} size='lg' color='#ffffff' />
			}
			clearIcon={<FontAwesomeIcon icon={faX} size='lg' color='#ffffff' />}
			locale='en-GB' // Use `en-GB` because when using `id-ID` the time separator is `.`
			onChange={value => props.onChange?.(value)}
			disableClock // The clock is little buggy like sometimes the clock doesn't close
			openWidgetsOnFocus
			{...props}
		/>
	)
}

export default DateTimePicker

import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import ReactDateTimePicker from 'react-datetime-picker'
import 'react-datetime-picker/dist/DateTimePicker.css'
import styled from 'styled-components'

export const StyledDateTimePicker = styled(ReactDateTimePicker)`
	& .react-datetime-picker__wrapper {
		padding: 5px;
		border-radius: 0.3vw;

		border: 0.15vw solid #ffffff;
	}

	& .react-datetime-picker__inputGroup__divider,
	& .react-datetime-picker__inputGroup__input {
		color: #ffffff;
	}

	& .react-datetime-picker__inputGroup__input::placeholder {
		color: #ffffff;
	}

	& .react-datetime-picker__inputGroup__input:focus,
	& .react-datetime-picker__button:focus {
		outline: none;
		outline: 2px solid #ffffff;
	}

	& .react-calendar {
		border-radius: 5px;
		border: 2px solid #ffffff;
	}

	& .react-datetime-picker__inputGroup__leadingZero {
		color: #ffffff;
	}

	color: #458de6;
`

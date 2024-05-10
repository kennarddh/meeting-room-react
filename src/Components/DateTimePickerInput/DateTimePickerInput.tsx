import { FC } from 'react'

import DateTimePicker from 'Components/DateTimePicker/DateTimePicker'

import { StyledLabel } from './Styles'
import type { IDateTimePickerInput } from './Types'

const DateTimePickerInput: FC<IDateTimePickerInput> = ({
	withoutText,
	text,
	style = {},
	...props
}) => {
	return (
		<StyledLabel style={{ width: '90%', ...style }}>
			{withoutText ? null : text}
			<DateTimePicker {...props} />
		</StyledLabel>
	)
}

export default DateTimePickerInput

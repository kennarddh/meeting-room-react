import { FC } from 'react'

import { StyledInput, StyledLabel } from './Styles'
import type { IInput } from './Types'

const Input: FC<IInput> = ({
	text,
	id,
	style = {},
	multiline = false,
	inputProps,
	multilineProps,
}) => {
	return (
		<StyledLabel htmlFor={id} style={{ width: '90%', ...style }}>
			{text}
			{multiline ? (
				<StyledInput
					id={id}
					as='textarea'
					placeholder={text}
					{...multilineProps}
				/>
			) : (
				<StyledInput id={id} placeholder={text} {...inputProps} />
			)}
		</StyledLabel>
	)
}

export { StyledLabel, StyledInput }

export default Input

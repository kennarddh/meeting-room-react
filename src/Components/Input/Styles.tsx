import styled from 'styled-components'

export const StyledInput = styled.input`
	width: 100%;
	height: 30px;

	border: none;
	border-bottom: 1px solid #ffffff;

	padding: 5px;
	font-size: 18px;

	background-color: transparent;

	color: #ffffff;

	&::placeholder {
		color: #ffffff;
	}
`

export const StyledLabel = styled.label`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
	gap: 5px;

	color: #ffffff;
`

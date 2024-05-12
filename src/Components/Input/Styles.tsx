import styled from 'styled-components'

export const StyledInput = styled.input`
	width: 100%;
	height: 5dvh;

	border: none;
	border-bottom: 0.3dvh solid #ffffff;

	padding: 5px;
	font-size: 1vw;

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

	font-size: 1vw;
`

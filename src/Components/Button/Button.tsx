import styled from 'styled-components'

import { IButton } from './Types'

const Button = styled.button<IButton>`
	border-radius: 5px;

	background-color: #6596f4;

	width: 70%;
	height: ${({ height }) => height ?? '100%'};

	font-size: ${({ fontSize }) => fontSize ?? 16}px;

	color: white;

	border: none;

	cursor: pointer;

	&:disabled {
		background-color: #808080;
		cursor: not-allowed;
	}

	@media screen and (min-width: 2000px) {
		border-radius: 25px;
	}
`

export default Button

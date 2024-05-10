import styled from 'styled-components'

import { IButton } from './Types'

const Button = styled.button<IButton>`
	border-radius: 5px;

	background-color: #6596f4;

	width: 70%;
	height: ${({ height }) => height ?? '100%'};

	font-size: ${({ fontSize }) => fontSize}px;

	color: white;

	border: none;

	cursor: pointer;
`

export default Button

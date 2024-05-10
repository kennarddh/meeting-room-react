import { styled } from 'styled-components'

import Button from 'Components/Button/Button'

export const DepartmentsContainer = styled.div`
	width: 80%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;

	gap: 5%;
`

export const DepartmentButton = styled(Button)<{ $selected?: boolean }>`
	width: 30%;
	height: 20%;

	background-color: ${({ $selected }) => ($selected ? '#5d43dc' : '#6596f4')};

	&:hover {
		background-color: #5d43dc;
	}
`

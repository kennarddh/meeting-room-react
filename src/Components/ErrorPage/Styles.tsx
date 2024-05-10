import styled from 'styled-components'

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	gap: 20px;

	width: 80%;
	height: 10%;

	@media (min-width: 900px) {
		width: 40%;
	}
`

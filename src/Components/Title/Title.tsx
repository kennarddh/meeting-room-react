import styled from 'styled-components'

const Title = styled.h1`
	color: white;

	font-weight: bold;

	max-width: 80%;

	@media screen and (max-width: 800px) {
		font-size: 20px;
	}

	@media screen and (min-width: 2000px) {
		font-size: 2vw;
	}
`

export default Title

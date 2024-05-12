import styled from 'styled-components'

import LinearGradientContainer from 'Components/LinearGradientContainer/LinearGradientContainer'

export const Container = styled(LinearGradientContainer)`
	width: 100%;
	height: 100dvh;

	display: flex;
	flex-direction: column;
`

export const Content = styled.div`
	width: 100%;
	height: 90%;
`

export const Header = styled.div`
	width: 100%;
	height: 10%;
`

export const Nav = styled.div`
	height: 100%;

	padding: 10px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (min-width: 2000px) {
		padding: 50px;
	}
`

export const LeftNav = styled.div``

export const DateTime = styled.h3`
	color: #ffffff;

	@media screen and (max-width: 600px) {
		font-size: 16px;
	}

	@media screen and (min-width: 2000px) {
		font-size: 2vw;
	}
`

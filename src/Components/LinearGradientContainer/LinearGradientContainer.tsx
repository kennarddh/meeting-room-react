import styled from 'styled-components'

import { ILinearGradientContainer } from './Types'

const LinearGradientContainer = styled.div<ILinearGradientContainer>`
	background: linear-gradient(#458de6, #5d43dc);

	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
`

export default LinearGradientContainer

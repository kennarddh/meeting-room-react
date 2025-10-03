import { styled } from 'styled-components'

import Button from 'Components/Button/Button'

export const CreateMeetingButton = styled(Button)`
	width: 30%;
	height: 100%;

	font-size: 1.5vw;
`

export const Container = styled.div`
	margin-top: 20px;

	width: 100%;
	height: calc(100% - 20px);

	display: flex;
	flex-direction: column;
`

export const TitleContainer = styled.div`
	width: 100%;
	height: 10%;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const ContentContainer = styled.div`
	width: 100%;
	height: 78%;

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
	flex-direction: row;
`

export const ButtonsContainer = styled.div`
	width: 100%;
	height: 12%;

	padding: 0 20px 20px 20px;

	display: flex;
	justify-content: space-between;

	@media screen and (min-height: 1000px) {
		padding: 0 50px 50px 50px;
	}

	@media screen and (max-height: 500px) {
		padding: 0 10px 10px 10px;
	}
`

export const VerticalContentContainer = styled(ContentContainer)`
	flex-direction: column;
`

export const InnerContentContainer = styled.div<{ $vertical?: boolean }>`
	width: 100%;
	height: 50%;

	display: flex;
	justify-content: center;
	align-items: ${props => (props.$vertical ? 'center' : 'flex-end')};
	gap: 20px;
	flex-direction: ${props => (props.$vertical ? 'column' : 'row')};
`

export const ErrorText = styled.p`
	width: 100%;
	height: 50%;

	padding: 10px 20px;

	display: flex;
	justify-content: center;
	align-items: flex-start;

	color: #ff0000;

	font-size: 2vw;
`

export const PasswordHintText = styled.p`
	color: #ffffff;
`

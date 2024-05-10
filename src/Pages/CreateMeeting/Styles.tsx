import { styled } from 'styled-components'

import Button from 'Components/Button/Button'

export const CreateMeetingButton = styled(Button)`
	width: 200px;
	height: 100%;
`

export const Container = styled.div`
	width: 100%;
	height: 100%;

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
`

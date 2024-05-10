import { FC } from 'react'

import Input from 'Components/Input/Input'
import LinearGradientContainer from 'Components/LinearGradientContainer/LinearGradientContainer'
import Title from 'Components/Title/Title'

import {
	ButtonsContainer,
	Container,
	ContentContainer,
	CreateMeetingButton,
	TitleContainer,
} from '../Styles'

const CreateMeeting1: FC = () => {
	return (
		<LinearGradientContainer>
			<Container>
				<TitleContainer>
					<Title>Create Meeting</Title>
				</TitleContainer>
				<ContentContainer>
					<Input
						id='password'
						inputProps={{ type: 'password' }}
						style={{ width: '40%' }}
						text='Password'
					/>
				</ContentContainer>
				<ButtonsContainer>
					<CreateMeetingButton fontSize={16}>
						Back
					</CreateMeetingButton>
					<CreateMeetingButton fontSize={16}>
						Next
					</CreateMeetingButton>
				</ButtonsContainer>
			</Container>
		</LinearGradientContainer>
	)
}

export default CreateMeeting1

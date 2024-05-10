import { FC, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Input from 'Components/Input/Input'
import Title from 'Components/Title/Title'

import useTitle from 'Hooks/useTitle'

import {
	ButtonsContainer,
	Container,
	ContentContainer,
	CreateMeetingButton,
	TitleContainer,
} from '../Styles'

const CreateMeeting1: FC = () => {
	const [Passoword, SetPassoword] = useState('')

	useTitle('Create Meeting: Step 1')

	const NavigateHook = useNavigate()

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	return (
		<Container>
			<TitleContainer>
				<Title>Create Meeting: Step 1</Title>
			</TitleContainer>
			<ContentContainer>
				<Input
					id='password'
					inputProps={{
						type: 'password',
						value: Passoword,
						onChange: event => SetPassoword(event.target.value),
					}}
					style={{ width: '40%' }}
					text='Password'
				/>
			</ContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton fontSize={16} onClick={Back}>
					Back
				</CreateMeetingButton>
				<CreateMeetingButton fontSize={16}>Next</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default CreateMeeting1

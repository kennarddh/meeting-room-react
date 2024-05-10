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
	const [Password, SetPassword] = useState('')

	useTitle('Create Meeting: Step 1')

	const NavigateHook = useNavigate()

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Next = useCallback(() => {
		if (Password !== 'Admin') return

		NavigateHook('../2', {
			state: { password: true } as IPasswordEnteredState,
		})
	}, [Password, NavigateHook])

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
						value: Password,
						onChange: event => SetPassword(event.target.value),
					}}
					style={{ width: '40%' }}
					text='Password'
				/>
			</ContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton fontSize={16} onClick={Back}>
					Back
				</CreateMeetingButton>
				<CreateMeetingButton fontSize={16} onClick={Next}>
					Next
				</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default CreateMeeting1

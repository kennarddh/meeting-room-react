import { FC, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import Input from 'Components/Input/Input'
import Title from 'Components/Title/Title'

import useTitle from 'Hooks/useTitle'

import {
	ButtonsContainer,
	Container,
	CreateMeetingButton,
	ErrorText,
	InnerContentContainer,
	TitleContainer,
	VerticalContentContainer,
} from 'Pages/Styles'

import { IPasswordEnteredState } from './Types'

const EnterPasswordPage: FC<{ title: string; nextPageUrl: string }> = ({
	title,
	nextPageUrl,
}) => {
	const [Password, SetPassword] = useState('')

	const [ErrorMessage, SetErrorMessage] = useState<string>('')

	useTitle(title)

	const NavigateHook = useNavigate()

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Next = useCallback(() => {
		if (Password !== 'Admin') return SetErrorMessage('Wrong password.')

		NavigateHook(nextPageUrl, {
			state: { password: true } satisfies IPasswordEnteredState,
		})
	}, [Password, NavigateHook])

	return (
		<Container>
			<TitleContainer>
				<Title>{title}</Title>
			</TitleContainer>
			<VerticalContentContainer>
				<InnerContentContainer>
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
				</InnerContentContainer>
				<ErrorText>{ErrorMessage}</ErrorText>
			</VerticalContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton onClick={Back}>Back</CreateMeetingButton>
				<CreateMeetingButton onClick={Next}>Next</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default EnterPasswordPage

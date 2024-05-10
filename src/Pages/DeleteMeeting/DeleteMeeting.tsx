import { FC, useCallback } from 'react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import Title from 'Components/Title/Title'

import useData from 'Hooks/useData'
import useTitle from 'Hooks/useTitle'

import { IPasswordEnteredState } from 'Pages/EnterPasswordPage/Types'
import {
	ButtonsContainer,
	Container,
	ContentContainer,
	CreateMeetingButton,
	TitleContainer,
} from 'Pages/Styles'

import { IDeleteMeetingState } from './Types'

const DeleteMeeting: FC = () => {
	useTitle('Delete Meeting: Step 2')

	const NavigateHook = useNavigate()

	const { state } = useLocation()

	const { DeleteMeeting } = useData()

	const State = state as
		| undefined
		| Partial<IPasswordEnteredState & IDeleteMeetingState>

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Delete = useCallback(() => {
		if (!State?.meetingID) return

		DeleteMeeting(State.meetingID)

		NavigateHook('/')
	}, [NavigateHook, DeleteMeeting, State])

	if (!(State?.password && State?.meetingID)) return <Navigate to='../' />

	return (
		<Container>
			<TitleContainer>
				<Title>Delete Meeting: Step 2</Title>
			</TitleContainer>
			<ContentContainer></ContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton onClick={Back}>Back</CreateMeetingButton>
				<CreateMeetingButton onClick={Delete}>
					Delete
				</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default DeleteMeeting

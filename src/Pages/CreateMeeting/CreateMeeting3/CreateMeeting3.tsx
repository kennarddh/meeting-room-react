import { FC, useCallback, useState } from 'react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import DateTimePickerInput from 'Components/DateTimePickerInput/DateTimePickerInput'
import Title from 'Components/Title/Title'

import useTitle from 'Hooks/useTitle'

import Departements from 'Constants/Departements'

import {
	ButtonsContainer,
	Container,
	CreateMeetingButton,
	ErrorText,
	InnerContentContainer,
	TitleContainer,
	VerticalContentContainer,
} from 'Pages/Styles'

import { IDepartementSelectedState } from '../CreateMeeting2/Types'

const CreateMeeting3: FC = () => {
	const [StartDatetime, SetStartDatetime] = useState<Date | null>(new Date())
	const [EndDatetime, SetEndDatetime] = useState<Date | null>(new Date())

	const [ErrorMessage, SetErrorMessage] = useState<string>('')

	useTitle('Create Meeting: Step 3')

	const NavigateHook = useNavigate()

	const { state } = useLocation()

	const State = state as undefined | Partial<IDepartementSelectedState>

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Next = useCallback(() => {
		SetErrorMessage('err')

		// NavigateHook('/')
	}, [NavigateHook])

	if (
		!(
			State?.departmentID &&
			Departements.map(deparatment => deparatment.id).includes(
				State.departmentID as (typeof Departements)[number]['id'],
			)
		)
	)
		return <Navigate to='../' />

	return (
		<Container>
			<TitleContainer>
				<Title>Create Meeting: Step 3</Title>
			</TitleContainer>
			<VerticalContentContainer>
				<InnerContentContainer>
					<DateTimePickerInput
						text='Start Datetime'
						required
						value={StartDatetime}
						onChange={value => SetStartDatetime(value)}
						style={{ width: '40%' }}
					/>
					<DateTimePickerInput
						text='End Datetime'
						required
						value={EndDatetime}
						onChange={value => SetEndDatetime(value)}
						style={{ width: '40%' }}
					/>
				</InnerContentContainer>
				<ErrorText>{ErrorMessage}</ErrorText>
			</VerticalContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton onClick={Back}>Back</CreateMeetingButton>
				<CreateMeetingButton
					onClick={Next}
					disabled={StartDatetime === null || EndDatetime === null}
				>
					Create
				</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default CreateMeeting3

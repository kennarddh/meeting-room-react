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
	const [StartDate, SetStartDate] = useState<Date | null>(new Date())
	const [EndDate, SetEndDate] = useState<Date | null>(new Date())

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
						text='Start Date'
						required
						value={StartDate}
						onChange={value => SetStartDate(value)}
						style={{ width: '40%' }}
					/>
					<DateTimePickerInput
						text='End Date'
						required
						value={EndDate}
						onChange={value => SetEndDate(value)}
						style={{ width: '40%' }}
					/>
				</InnerContentContainer>
				<ErrorText>{ErrorMessage}</ErrorText>
			</VerticalContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton onClick={Back}>Back</CreateMeetingButton>
				<CreateMeetingButton
					onClick={Next}
					disabled={StartDate === null || EndDate === null}
				>
					Create
				</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default CreateMeeting3

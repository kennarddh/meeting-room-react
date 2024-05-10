import { FC, useCallback, useState } from 'react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import DateTimePickerInput from 'Components/DateTimePickerInput/DateTimePickerInput'
import Title from 'Components/Title/Title'

import IsSameDate from 'Utils/IsSameDate'

import useData from 'Hooks/useData'
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

	const { CreateMeeting, Meetings } = useData()

	const { state } = useLocation()

	const State = state as undefined | Partial<IDepartementSelectedState>

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Next = useCallback(() => {
		if (
			!(
				State?.departmentID &&
				Departements.map(deparatment => deparatment.id).includes(
					State.departmentID as (typeof Departements)[number]['id'],
				)
			)
		)
			return SetErrorMessage('Invalid department. Should not happen.')

		if (!StartDatetime)
			return SetErrorMessage('Start datetime cannot be empty.')
		if (!EndDatetime)
			return SetErrorMessage('End datetime cannot be empty.')

		if (!IsSameDate(StartDatetime, EndDatetime))
			return SetErrorMessage(
				'Start datetime and end datetime must be on the same day.',
			)

		const duration = EndDatetime.getTime() - StartDatetime.getTime()

		if (duration === 0)
			return SetErrorMessage('Duration must be greater than 0.')

		if (duration < 0)
			return SetErrorMessage(
				'End datetime cannot be greater than start datetime.',
			)

		const minDatetime = structuredClone(StartDatetime)
		const maxDatetime = structuredClone(StartDatetime)

		// TODO: Change when done. This is for easier testing
		// minDatetime.setHours(7)
		// minDatetime.setMinutes(0)
		// minDatetime.setSeconds(0)

		// maxDatetime.setHours(17)
		// maxDatetime.setMinutes(0)
		// maxDatetime.setSeconds(0)

		minDatetime.setHours(0)
		minDatetime.setMinutes(0)
		minDatetime.setSeconds(0)

		maxDatetime.setHours(23)
		maxDatetime.setMinutes(59)
		maxDatetime.setSeconds(59)

		if (StartDatetime < minDatetime)
			return SetErrorMessage(
				'Start datetime cannot be smaller than 7:00.',
			)

		if (StartDatetime > maxDatetime)
			return SetErrorMessage(
				'Start datetime cannot be greater than 17:00.',
			)

		if (EndDatetime < minDatetime)
			return SetErrorMessage('End datetime cannot be smaller than 7:00.')

		if (EndDatetime > maxDatetime)
			return SetErrorMessage('End datetime cannot be greater than 17:00.')

		for (const meeting of Meetings) {
			if (
				StartDatetime.getTime() >= meeting.startDatetime &&
				StartDatetime.getTime() <= meeting.endDatetime
			)
				return SetErrorMessage(
					'Start datetime overlapped with other meetings.',
				)

			if (
				EndDatetime.getTime() >= meeting.startDatetime &&
				EndDatetime.getTime() <= meeting.endDatetime
			)
				return SetErrorMessage(
					'End datetime overlapped with other meetings.',
				)
		}

		CreateMeeting({
			id: crypto.randomUUID(),
			departementID: State.departmentID,
			startDatetime: StartDatetime.getTime(),
			endDatetime: EndDatetime.getTime(),
		})

		NavigateHook('/')
	}, [
		NavigateHook,
		EndDatetime,
		StartDatetime,
		State,
		Meetings,
		CreateMeeting,
	])

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

import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import FormatDate from 'Utils/FormatDate'
import FormatRelativeDateTime from 'Utils/FormatRelativeDateTime'
import FormatTime from 'Utils/FormatTime'

import useData from 'Hooks/useData'
import useTitle from 'Hooks/useTitle'

import Departments from 'Constants/Departments'

import { IDeleteMeetingState } from 'Pages/DeleteMeeting/Types'

import {
	BookMeetingButton,
	BookMeetingButtonContainer,
	Container,
	IncomingMeeting,
	IncomingMeetingDatetime,
	IncomingMeetingText,
	IncomingMeetingsList,
	Left,
	LeftText,
	LeftTitle,
	Right,
	RightTitle,
} from './Styles'

const Home: FC = () => {
	const NavigateHook = useNavigate()

	const { SortedMeetings, CurrentlyActiveMeeting, NextMeeting } = useData()

	useTitle('Home')

	return (
		<Container>
			<Left $busy={CurrentlyActiveMeeting !== null}>
				<LeftTitle>
					{CurrentlyActiveMeeting === null
						? 'Available'
						: 'Room Busy'}
				</LeftTitle>
				<LeftText>
					{CurrentlyActiveMeeting === null ? (
						NextMeeting ? (
							<>
								Next meeting is starting{' '}
								{FormatRelativeDateTime(
									NextMeeting.startDatetime -
										new Date().getTime(),
								)}
								, Organized by{' '}
								<strong>
									{Departments.find(
										department =>
											department.id ===
											NextMeeting.departmentID,
									)?.name ?? 'Unknown Department'}
								</strong>
							</>
						) : (
							'No meeting booked'
						)
					) : (
						<>
							Meeting will end{' '}
							{FormatRelativeDateTime(
								CurrentlyActiveMeeting.startDatetime -
									new Date().getTime(),
							)}
							, Organized by{' '}
							<strong>
								{Departments.find(
									department =>
										department.id ===
										CurrentlyActiveMeeting.departmentID,
								)?.name ?? 'Unknown Department'}
							</strong>
						</>
					)}
				</LeftText>
				<BookMeetingButtonContainer>
					{CurrentlyActiveMeeting === null ? (
						<BookMeetingButton onClick={() => NavigateHook('/new')}>
							Book Now
						</BookMeetingButton>
					) : (
						<BookMeetingButton
							onClick={() =>
								NavigateHook('/delete/1', {
									state: {
										meetingID: CurrentlyActiveMeeting.id,
									} satisfies IDeleteMeetingState,
								})
							}
						>
							End Now
						</BookMeetingButton>
					)}
				</BookMeetingButtonContainer>
			</Left>
			<Right>
				<RightTitle>Coming Next</RightTitle>
				<IncomingMeetingsList>
					{SortedMeetings.map(
						meeting =>
							meeting.id !== CurrentlyActiveMeeting?.id && (
								<IncomingMeeting
									key={meeting.id}
									onClick={() =>
										NavigateHook('/delete/1', {
											state: {
												meetingID: meeting.id,
											} satisfies IDeleteMeetingState,
										})
									}
								>
									<IncomingMeetingDatetime>
										{FormatTime(
											new Date(meeting.startDatetime),
										)}{' '}
										-{' '}
										{FormatTime(
											new Date(meeting.endDatetime),
										)}{' '}
										|{' '}
										{FormatDate(
											new Date(meeting.startDatetime),
										)}
									</IncomingMeetingDatetime>
									<IncomingMeetingText>
										Room Occupied by{' '}
										{Departments.find(
											department =>
												department.id ===
												meeting.departmentID,
										)?.name ?? 'Unknown Department'}
									</IncomingMeetingText>
								</IncomingMeeting>
							),
					)}
				</IncomingMeetingsList>
			</Right>
		</Container>
	)
}

export default Home

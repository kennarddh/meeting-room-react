import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import FormatDate from 'Utils/FormatDate'
import FormatDateTime from 'Utils/FormatDateTime'
import FormatRelativeDateTime from 'Utils/FormatRelativeDateTime'
import FormatTime from 'Utils/FormatTime'

import useData from 'Hooks/useData'
import useTitle from 'Hooks/useTitle'

import Departements from 'Constants/Departements'

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
									{Departements.find(
										department =>
											department.id ===
											NextMeeting.departementID,
									)?.name ?? 'Unknown Department'}
								</strong>
							</>
						) : (
							'No meeting booked'
						)
					) : (
						<>
							Meeting is on going until{' '}
							{FormatDateTime(
								new Date(CurrentlyActiveMeeting.endDatetime),
							)}
							, Organized by{' '}
							<strong>
								{Departements.find(
									department =>
										department.id ===
										CurrentlyActiveMeeting.departementID,
								)?.name ?? 'Unknown Department'}
							</strong>
						</>
					)}
				</LeftText>
				<BookMeetingButtonContainer>
					<BookMeetingButton onClick={() => NavigateHook('/new')}>
						Book Now
					</BookMeetingButton>
				</BookMeetingButtonContainer>
			</Left>
			<Right>
				<RightTitle>Coming Next</RightTitle>
				<IncomingMeetingsList>
					{SortedMeetings.map(
						meeting =>
							meeting.id !== CurrentlyActiveMeeting?.id && (
								<IncomingMeeting>
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
										{Departements.find(
											department =>
												department.id ===
												meeting.departementID,
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

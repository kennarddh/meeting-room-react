import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

import FormatDate from 'Utils/FormatDate'
import FormatTime from 'Utils/FormatTime'

import useData from 'Hooks/useData'

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

	const { Meetings } = useData()

	return (
		<Container>
			<Left>
				<LeftTitle>Available</LeftTitle>
				<LeftText>
					Next meeting is starting in 1.5 hours, Organized by{' '}
					<strong>Sales</strong>
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
					{Meetings.map(meeting => (
						<IncomingMeeting>
							<IncomingMeetingDatetime>
								{FormatTime(new Date(meeting.startDatetime))} -{' '}
								{FormatTime(new Date(meeting.endDatetime))} |{' '}
								{FormatDate(new Date(meeting.startDatetime))}
							</IncomingMeetingDatetime>
							<IncomingMeetingText>
								Room Occupied by{' '}
								{
									Departements.find(
										department =>
											department.id ===
											meeting.departementID,
									)?.name ?? "Unknown Department"
								}
							</IncomingMeetingText>
						</IncomingMeeting>
					))}
				</IncomingMeetingsList>
			</Right>
		</Container>
	)
}

export default Home

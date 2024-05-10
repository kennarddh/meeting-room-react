import { FC } from 'react'

import { useNavigate } from 'react-router-dom'

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
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>

						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>

						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>

						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>

						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>

						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>
						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
					<IncomingMeeting>
						<IncomingMeetingDatetime>
							7:00 - 12:00 | DD - MM - YYYY
						</IncomingMeetingDatetime>
						<IncomingMeetingText>
							Room Occupied by Finance
						</IncomingMeetingText>
					</IncomingMeeting>
				</IncomingMeetingsList>
			</Right>
		</Container>
	)
}

export default Home

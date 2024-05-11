import { styled } from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: row;
`

export const Left = styled.div<{ $busy?: boolean }>`
	width: 60%;
	height: 100%;

	display: flex;
	align-items: center;
	flex-direction: column;

	background-color: ${({ $busy }) => ($busy ? '#ff000099' : 'transparent')};
`

export const LeftTitle = styled.h2`
	width: 100%;
	height: 30%;

	color: #ffffff;

	font-size: 5vw;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const LeftText = styled.p`
	width: 100%;
	height: 10%;

	text-align: center;

	color: #ffffff;

	font-size: 20px;
`

export const BookMeetingButtonContainer = styled.div`
	width: 100%;
	height: 50%;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const BookMeetingButton = styled.button`
	width: 50%;
	height: 50%;

	background-color: transparent;

	font-size: 30px;

	border: 2px solid #ffffff;
	border-radius: 12px;

	color: white;

	cursor: pointer;

	&:hover {
		background-color: #458de6;
	}
`

export const Right = styled.div`
	width: 40%;
	height: 100%;

	display: flex;
	flex-direction: column;
`

export const RightTitle = styled.h3`
	width: 100%;
	height: 10%;

	padding: 0 20px;

	display: flex;
	align-items: center;
	justify-content: flex-end;

	color: #ffffff;
`

export const IncomingMeetingsList = styled.div`
	width: 100%;
	height: 90%;

	display: grid;
	justify-items: center;
	grid-template-columns: 1fr;
	grid-auto-rows: 30%;
	gap: 20px;

	padding-bottom: 20px;

	overflow-y: scroll;
`

export const IncomingMeeting = styled.button`
	width: 90%;

	background-color: #458de6;

	border: none;
	border-radius: 12px;

	padding: 10px 20px;

	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	flex-direction: column;

	cursor: pointer;
`

export const IncomingMeetingDatetime = styled.p`
	color: #ffffff;

	font-size: 1.5vw;
`

export const IncomingMeetingText = styled.p`
	color: #ffffff;

	font-weight: bold;
	font-size: 1.7vw;
`

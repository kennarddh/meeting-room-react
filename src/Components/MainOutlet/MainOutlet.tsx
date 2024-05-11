import { FC, useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import Title from 'Components/Title/Title'

import FormatDateTime from 'Utils/FormatDateTime'

import { Container, Content, DateTime, Header, LeftNav, Nav } from './Styles'

const MainOutlet: FC = () => {
	const [CurrentDate, SetCurrentDate] = useState<Date>(new Date())

	useEffect(() => {
		const intervalID = setInterval(() => {
			SetCurrentDate(new Date())
		}, 1000)

		return () => clearInterval(intervalID)
	}, [])

	return (
		<Container>
			<Header>
				<Nav>
					<Title>Meeting Room</Title>
					<LeftNav>
						<DateTime>{FormatDateTime(CurrentDate)}</DateTime>
					</LeftNav>
				</Nav>
			</Header>
			<Content>
				<Outlet />
			</Content>
		</Container>
	)
}

export default MainOutlet

import { FC } from 'react'

import { Pacman } from '@kennarddh/react-spinner'

import Title from 'Components/Title/Title'

import { Container } from './Styles'

const LoadingPage: FC = () => {
	return (
		<Container>
			<Title>Loading</Title>
			<Pacman width={100} height={100} />
		</Container>
	)
}

export default LoadingPage

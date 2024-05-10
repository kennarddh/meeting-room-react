import { FC, useCallback } from 'react'

import {
	isRouteErrorResponse,
	useNavigate,
	useRouteError,
} from 'react-router-dom'

import Button from 'Components/Button/Button'
import LinearGradientContainer from 'Components/LinearGradientContainer/LinearGradientContainer'
import Title from 'Components/Title/Title'

import useTitle from 'Hooks/useTitle'

import { ButtonsContainer } from './Styles'

const ErrorPage: FC = () => {
	const error = useRouteError()

	let errorStatus: number | null = null

	if (isRouteErrorResponse(error) || error instanceof Response) {
		errorStatus = error.status
	}

	const errorMessage = errorStatus
		? errorStatus === 404
			? 'Page Not Found'
			: 'Something Went Wrong'
		: 'Something Went Wrong'

	useTitle(errorMessage)

	const NavigateHook = useNavigate()

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const BackHome = useCallback(() => {
		NavigateHook('/')
	}, [NavigateHook])

	return (
		<LinearGradientContainer flexDirection='column' style={{ gap: '20px' }}>
			<Title>{errorMessage}</Title>
			<ButtonsContainer>
				<Button fontSize={20} onClick={Back}>
					Back
				</Button>
				<Button fontSize={20} onClick={BackHome}>
					Back Home
				</Button>
			</ButtonsContainer>
		</LinearGradientContainer>
	)
}

export default ErrorPage

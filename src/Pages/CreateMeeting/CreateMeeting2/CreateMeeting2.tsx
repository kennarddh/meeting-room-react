import { FC, useCallback, useState } from 'react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import Title from 'Components/Title/Title'

import useTitle from 'Hooks/useTitle'

import Departements from 'Constants/Departements'

import { IPasswordEnteredState } from 'Pages/EnterPasswordPage/Types'
import {
	ButtonsContainer,
	Container,
	ContentContainer,
	CreateMeetingButton,
	TitleContainer,
} from 'Pages/Styles'

import { DepartmentButton, DepartmentsContainer } from './Styles'
import { IDepartementSelectedState } from './Types'

const CreateMeeting2: FC = () => {
	const [DepartementID, SetDepartementID] = useState<string | null>(null)

	useTitle('Create Meeting: Step 2')

	const NavigateHook = useNavigate()

	const { state } = useLocation()

	const State = state as undefined | Partial<IPasswordEnteredState>

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Next = useCallback(() => {
		if (DepartementID === null) return

		NavigateHook('../3', {
			state: {
				departmentID: DepartementID,
			} satisfies IDepartementSelectedState,
		})
	}, [NavigateHook, DepartementID])

	if (!State?.password) return <Navigate to='../' />

	return (
		<Container>
			<TitleContainer>
				<Title>Create Meeting: Step 2</Title>
			</TitleContainer>
			<ContentContainer>
				<DepartmentsContainer>
					{Departements.map(departement => (
						<DepartmentButton
							onClick={() => SetDepartementID(departement.id)}
							$selected={DepartementID === departement.id}
						>
							{departement.name}
						</DepartmentButton>
					))}
				</DepartmentsContainer>
			</ContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton onClick={Back}>Back</CreateMeetingButton>
				<CreateMeetingButton
					onClick={Next}
					disabled={DepartementID === null}
				>
					Next
				</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default CreateMeeting2

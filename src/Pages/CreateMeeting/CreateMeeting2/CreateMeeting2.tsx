import { FC, useCallback, useState } from 'react'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import Title from 'Components/Title/Title'

import useTitle from 'Hooks/useTitle'

import Departments from 'Constants/Departments'

import { IPasswordEnteredState } from 'Pages/EnterPasswordPage/Types'
import {
	ButtonsContainer,
	Container,
	ContentContainer,
	CreateMeetingButton,
	TitleContainer,
} from 'Pages/Styles'

import { DepartmentButton, DepartmentsContainer } from './Styles'
import { IDepartmentSelectedState } from './Types'

const CreateMeeting2: FC = () => {
	const [DepartmentID, SetDepartmentID] = useState<string | null>(null)

	useTitle('Create Meeting: Step 2')

	const NavigateHook = useNavigate()

	const { state } = useLocation()

	const State = state as undefined | Partial<IPasswordEnteredState>

	const Back = useCallback(() => {
		NavigateHook(-1)
	}, [NavigateHook])

	const Next = useCallback(() => {
		if (DepartmentID === null) return

		NavigateHook('../3', {
			state: {
				departmentID: DepartmentID,
			} satisfies IDepartmentSelectedState,
		})
	}, [NavigateHook, DepartmentID])

	if (!State?.password) return <Navigate to='../' />

	return (
		<Container>
			<TitleContainer>
				<Title>Create Meeting: Step 2</Title>
			</TitleContainer>
			<ContentContainer>
				<DepartmentsContainer>
					{Departments.map(department => (
						<DepartmentButton
							key={department.id}
							onClick={() => SetDepartmentID(department.id)}
							$selected={DepartmentID === department.id}
						>
							{department.name}
						</DepartmentButton>
					))}
				</DepartmentsContainer>
			</ContentContainer>
			<ButtonsContainer>
				<CreateMeetingButton onClick={Back}>Back</CreateMeetingButton>
				<CreateMeetingButton
					onClick={Next}
					disabled={DepartmentID === null}
				>
					Next
				</CreateMeetingButton>
			</ButtonsContainer>
		</Container>
	)
}

export default CreateMeeting2

import { FC } from 'react'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'

import MainOutlet from 'Components/MainOutlet/MainOutlet'
import PWAManager from 'Components/PWAManager/PWAManager'

import { DataProvider } from 'Contexts/Data/Data'
import { TitleProvider } from 'Contexts/Title'

import CreateMeeting2 from 'Pages/CreateMeeting/CreateMeeting2/CreateMeeting2'
import CreateMeeting3 from 'Pages/CreateMeeting/CreateMeeting3/CreateMeeting3'
import DeleteMeeting from 'Pages/DeleteMeeting/DeleteMeeting'
import EnterPasswordPage from 'Pages/EnterPasswordPage/EnterPasswordPage'
import ErrorPage from 'Pages/ErrorPage/ErrorPage'
import Home from 'Pages/Home/Home'

const router = createBrowserRouter(
	[
		{
			path: '/',
			errorElement: <ErrorPage />,
			element: <MainOutlet />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'new',
					children: [
						{
							index: true,
							element: <Navigate to='1' />,
						},
						{
							path: '1',
							element: (
								<EnterPasswordPage
									title='Create Meeting: Step 1'
									nextPageUrl='/new/2'
									backUrl='/'
								/>
							),
						},
						{
							path: '2',
							element: <CreateMeeting2 />,
						},
						{
							path: '3',
							element: <CreateMeeting3 />,
						},
					],
				},
				{
					path: 'delete',
					children: [
						{
							path: '1',
							element: (
								<EnterPasswordPage
									title='Delete Meeting: Step 1'
									nextPageUrl='/delete/2'
									backUrl='/'
								/>
							),
						},
						{
							path: '2',
							element: <DeleteMeeting />,
						},
					],
				},
			],
		},
	],
	{ basename: import.meta.env.BASE_URL },
)

const App: FC = () => {
	return (
		<MantineProvider>
			<TitleProvider>
				<DataProvider>
					<RouterProvider router={router} />
					<PWAManager />
					<Notifications />
				</DataProvider>
			</TitleProvider>
		</MantineProvider>
	)
}

export default App

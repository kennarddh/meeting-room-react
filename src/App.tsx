import { FC, Suspense, lazy } from 'react'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import '@kennarddh/react-spinner/build/style.css'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'
import { Notifications } from '@mantine/notifications'
import '@mantine/notifications/styles.css'

import MainOutlet from 'Components/MainOutlet/MainOutlet'
import PWAManager from 'Components/PWAManager/PWAManager'

import { DataProvider } from 'Contexts/Data/Data'
import { TitleProvider } from 'Contexts/Title'

import LoadingPage from 'Pages/LoadingPage/LoadingPage'

const CreateMeeting2 = lazy(
	() => import('Pages/CreateMeeting/CreateMeeting2/CreateMeeting2'),
)
const CreateMeeting3 = lazy(
	() => import('Pages/CreateMeeting/CreateMeeting3/CreateMeeting3'),
)
const DeleteMeeting = lazy(() => import('Pages/DeleteMeeting/DeleteMeeting'))
const EnterPasswordPage = lazy(
	() => import('Pages/EnterPasswordPage/EnterPasswordPage'),
)
const ErrorPage = lazy(() => import('Pages/ErrorPage/ErrorPage'))
const Home = lazy(() => import('Pages/Home/Home'))

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
					path: 'index.html',
					element: <Navigate to='/' />,
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
					<Suspense fallback={<LoadingPage />}>
						<RouterProvider router={router} />
						<PWAManager />
						<Notifications />
					</Suspense>
				</DataProvider>
			</TitleProvider>
		</MantineProvider>
	)
}

export default App

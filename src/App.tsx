import { FC } from 'react'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainOutlet from 'Components/MainOutlet/MainOutlet'

import { DataProvider } from 'Contexts/Data/Data'
import { TitleProvider } from 'Contexts/Title'

import CreateMeeting2 from 'Pages/CreateMeeting/CreateMeeting2/CreateMeeting2'
import CreateMeeting3 from 'Pages/CreateMeeting/CreateMeeting3/CreateMeeting3'
import EnterPasswordPage from 'Pages/EnterPasswordPage/EnterPasswordPage'
import ErrorPage from 'Pages/ErrorPage/ErrorPage'
import Home from 'Pages/Home/Home'

const router = createBrowserRouter([
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
		],
	},
])

const App: FC = () => {
	return (
		<TitleProvider>
			<DataProvider>
				<RouterProvider router={router} />
			</DataProvider>
		</TitleProvider>
	)
}

export default App

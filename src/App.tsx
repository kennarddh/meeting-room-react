import { FC } from 'react'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from 'Components/ErrorPage/ErrorPage'

import { DataProvider } from 'Contexts/Data/Data'
import { TitleProvider } from 'Contexts/Title'

import CreateMeeting1 from 'Pages/CreateMeeting/CreateMeeting1/CreateMeeting1'
import Home from 'Pages/Home/Home'

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
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
						element: <CreateMeeting1 />,
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

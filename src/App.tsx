import { FC } from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import ErrorPage from 'Components/ErrorPage/ErrorPage'

import { DataProvider } from 'Contexts/Data/Data'
import { TitleProvider } from 'Contexts/Title'

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

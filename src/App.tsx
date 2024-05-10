import { FC } from 'react'

import { DataProvider } from 'Contexts/Data/Data'
import { TitleProvider } from 'Contexts/Title'

const App: FC = () => {
	return (
		<TitleProvider>
			<DataProvider>
				<div></div>
			</DataProvider>
		</TitleProvider>
	)
}

export default App

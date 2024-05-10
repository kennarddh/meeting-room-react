import { useContext, useEffect } from 'react'

import TitleContext from 'Contexts/Title'

const useTitle = (title: string) => {
	const { SetTitle } = useContext(TitleContext)

	useEffect(() => {
		SetTitle(title)
	}, [SetTitle, title])
}

export default useTitle

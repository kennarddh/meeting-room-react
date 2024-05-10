import {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react'

interface ITitleContext {
	Title: string
	SetTitle: (title: string) => void
}

interface ITitleContextProvider {
	children: ReactNode
}

const TitleContext = createContext<ITitleContext>({
	Title: '',
	SetTitle: () => undefined,
})

export const TitleProvider: FC<ITitleContextProvider> = ({ children }) => {
	const [Title, SetTitle] = useState<string>('')

	useEffect(() => {
		document.title = `${Title} | Meeting Room`
	}, [Title])

	const SetTitleExport = useCallback((title: string) => {
		SetTitle(title)
	}, [])

	return (
		<TitleContext.Provider value={{ Title, SetTitle: SetTitleExport }}>
			{children}
		</TitleContext.Provider>
	)
}

export default TitleContext

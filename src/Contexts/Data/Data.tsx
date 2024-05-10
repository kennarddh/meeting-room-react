/* eslint-disable security/detect-object-injection */
import {
	FC,
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'

import { IData, IDataContext, IDataContextProvider, IMeeting } from './Types'

const DataContext = createContext<IDataContext>({} as IDataContext)

export const DataProvider: FC<IDataContextProvider> = ({ children }) => {
	const [Data, SetData] = useState<IData>(() => {
		const stringData = localStorage.getItem('meetingsData')

		if (stringData !== null) {
			return JSON.parse(stringData)
		}

		return {
			meetings: [],
		} satisfies IData
	})

	useEffect(() => {
		localStorage.setItem('meetingsData', JSON.stringify(Data))
	}, [Data])

	const Meetings = useMemo(() => Data.meetings, [Data])
	const SortedMeetings = useMemo(
		() =>
			structuredClone(Data.meetings).sort(
				(meeting1, meeting2) =>
					meeting1.startDatetime - meeting2.startDatetime,
			),
		[Data],
	)

	const CreateMeeting = useCallback((meeting: IMeeting) => {
		SetData(
			prev =>
				({
					...prev,
					meetings: [...prev.meetings, meeting],
				}) satisfies IData,
		)
	}, [])

	const GetMeetingByID = useCallback(
		(id: string) => {
			return Data.meetings.find(item => item.id === id)
		},
		[Data],
	)

	const DeleteMeeting = useCallback((id: string) => {
		SetData(
			prev =>
				({
					...prev,
					meetings: prev.meetings.filter(item => item.id !== id),
				}) satisfies IData,
		)
	}, [])

	const CurrentlyActiveMeetingID = useMemo(() => {
		if (!SortedMeetings[0]) return null

		if (SortedMeetings[0].startDatetime <= new Date().getTime())
			return SortedMeetings[0].id

		return null
	}, [SortedMeetings])

	const CurrentlyActiveMeeting = useMemo(
		() =>
			CurrentlyActiveMeetingID !== null
				? GetMeetingByID(CurrentlyActiveMeetingID) ?? null
				: null,
		[GetMeetingByID, CurrentlyActiveMeetingID],
	)

	const NextMeetingID = useMemo(() => {
		if (!SortedMeetings[0]) return null

		return SortedMeetings[0].id
	}, [SortedMeetings])

	const NextMeeting = useMemo(
		() =>
			NextMeetingID !== null
				? GetMeetingByID(NextMeetingID) ?? null
				: null,
		[GetMeetingByID, NextMeetingID],
	)

	useEffect(() => {
		const intervalID = setInterval(() => {
			const currentDatetime = new Date().getTime()

			SetData(prev => ({
				...prev,
				meetings: prev.meetings.filter(
					meeting => meeting.endDatetime >= currentDatetime,
				),
			}))
		}, 1000)

		return () => clearInterval(intervalID)
	})

	return (
		<DataContext.Provider
			value={{
				Data,

				Meetings,
				SortedMeetings,
				CurrentlyActiveMeetingID,
				CurrentlyActiveMeeting,
				NextMeetingID,
				NextMeeting,
				CreateMeeting,
				GetMeetingByID,
				DeleteMeeting,
			}}
		>
			{children}
		</DataContext.Provider>
	)
}

export default DataContext

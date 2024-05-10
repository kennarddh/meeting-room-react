import { ReactNode } from 'react'

export interface IDataContext {
	Data: IData

	Meetings: IMeeting[]
	CreateMeeting: IDataCreate<IMeeting>
	GetMeetingByID: IDataGetByID<IMeeting>
	DeleteMeeting: IDataDelete
}

export interface IDataContextProvider {
	children: ReactNode
}

export enum IDepartment {
	Operation,
	GeneralAffair,
	Finance,
	BusinessContract,
	Project,
	Marketing,
	Executive,
}

export interface IMeeting {
	id: string
	name: string
	startDate: number
	endDate: number
	departement: IDepartment
}

export interface IData {
	meetings: IMeeting[]
}

export type IDataCreate<T> = (data: T) => void
export type IDataGetByID<T> = (id: string) => T | undefined
export type IDataEdit<T> = (id: string, data: Partial<T>) => void
export type IDataDelete = (id: string) => void

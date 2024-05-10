import { CSSProperties } from 'react'

import { IDateTimePicker } from 'Components/DateTimePicker/Types'

export interface IDateTimePickerInputBase extends IDateTimePicker {
	style?: CSSProperties
}

export interface IDateTimePickerInputWithoutText
	extends IDateTimePickerInputBase {
	withoutText: true
	text?: never
}

export interface IDateTimePickerInputWithText extends IDateTimePickerInputBase {
	withoutText?: never
	text: string
}

export type IDateTimePickerInput =
	| IDateTimePickerInputWithText
	| IDateTimePickerInputWithoutText

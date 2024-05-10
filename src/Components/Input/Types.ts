import type { ComponentPropsWithoutRef } from 'react'

import { CSSProperties } from 'styled-components'

export interface IInputBase {
	text: string
	id: string
	style?: CSSProperties
}

export interface IInputSingle extends IInputBase {
	multiline?: never
	inputProps?: ComponentPropsWithoutRef<'input'>
	multilineProps?: never
}

export interface IInputMultiline extends IInputBase {
	multiline: true
	inputProps?: never
	multilineProps?: ComponentPropsWithoutRef<'textarea'>
}

export type IInput = IInputSingle | IInputMultiline

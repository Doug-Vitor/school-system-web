import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react"

export default interface IInputProperties {
    value: any
    type?: HTMLInputTypeAttribute
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur?: FocusEventHandler<HTMLInputElement>
    disabled?: boolean
    labelValue: string
}
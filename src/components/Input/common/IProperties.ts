import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

export default interface IInputProperties {
    value: any
    type?: HTMLInputTypeAttribute
    onChange: ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
    labelValue: string
}
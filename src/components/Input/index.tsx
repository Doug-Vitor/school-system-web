import { ChangeEventHandler, HTMLInputTypeAttribute } from "react"

interface Props {
    value: any
    type?: HTMLInputTypeAttribute
    onChange: ChangeEventHandler<HTMLInputElement>
    inputClassName?: string
    labelValue: string
    labelClassName?: string
}

export default (props: Props) =>
    <div className="form-group">
        <label className={props.labelClassName}>{props.labelValue}</label>
        <input type={props.type ?? "text"} className={props.inputClassName} value={props.value} onChange={props.onChange} />
    </div>
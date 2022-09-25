import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

import Datetime from 'react-datetime';

import "react-datetime/css/react-datetime.css";
import './index.scss';

interface Props {
    value: any
    type?: HTMLInputTypeAttribute
    onChange: ChangeEventHandler<HTMLInputElement>
    inputClassName?: string
    disabled?: boolean
    labelValue: string
    labelClassName?: string
}

export default function Input(props: Props) {

    return (
        <div className="form-group">
            <label className={props.labelClassName}>{props.labelValue}</label>
            <input type={props.type ?? "text"} className={props.inputClassName} disabled={props.disabled ?? false} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export const DatePicker = (props: Props) =>
    props.disabled ?
        Input({...props, value: new Date(props.value).toLocaleDateString()}) :
        <div className="form-group">
            <label className={props.labelClassName}>{props.labelValue}</label>
            <Datetime onChange={props.onChange} dateFormat="DD/MM/YYYY" timeFormat={false} value={new Date(props.value)} />
        </div>
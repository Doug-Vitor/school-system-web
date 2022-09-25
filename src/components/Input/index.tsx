import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

import Datetime from 'react-datetime';

import "react-datetime/css/react-datetime.css";
import './index.scss';

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
    </div>;

export const DatePicker = (props: Props) =>
    <div className="form-group">
        <label className={props.labelClassName}>{props.labelValue}</label>
        <Datetime onChange={props.onChange} dateFormat="DD/MM/YYYY" timeFormat={false} value={new Date(props.value)} />
    </div>
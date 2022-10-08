import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { flex } from "../../styles";

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

interface Props {
    value: any
    type?: HTMLInputTypeAttribute
    onChange: ChangeEventHandler<HTMLInputElement>
    disabled?: boolean
    labelValue: string
}

export default function Input(props: Props) {
    return (
        <div className={`${flex} mb-[3.6vh]`}>
            <label>{props.labelValue}</label>
            <input type={props.type ?? "text"} className="transition ease-in p-[9px] w-[100%] mx-[0.6vw] bg-transparent border-0 border-b-[1px] border-black outline-none focus:rounded-[4px] focus:border-none focus:shadow-lg" disabled={props.disabled ?? false} value={props.value} onChange={props.onChange} />
        </div>
    )
}

export const DatePicker = (props: Props) =>
    props.disabled ?
        Input({...props, value: new Date(props.value).toLocaleDateString()}) :
        <div className="form-group">
            <label>{props.labelValue}</label>
            <Datetime onChange={props.onChange} dateFormat="DD/MM/YYYY" timeFormat={false} value={new Date(props.value)} />
        </div>
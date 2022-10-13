import IInputProperties from "../common/IProperties";

import { input, label } from '../../../styles/form';
import FormGroup from "../common/FormGroup";
import Input from "..";

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const DatetimeInput = (props: any) => <input {...props} className={input} />
export default (props: IInputProperties) =>
    props.disabled ? Input({ ...props, value: new Date(props.value).toLocaleDateString() }) :
        <FormGroup>
            <label className={label}>{props.labelValue}</label>
            <Datetime renderInput={DatetimeInput} onChange={props.onChange} dateFormat="DD/MM/YYYY" timeFormat={false} value={new Date(props.value)} />
        </FormGroup>;
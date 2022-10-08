import IInputProperties from "../common/IProperties";

import Input from "..";
import FormGroup from "../common/FormGroup";

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

export default (props: IInputProperties) =>
    props.disabled ? Input({ ...props, value: new Date(props.value).toLocaleDateString() }) :
        <FormGroup>
            <label>{props.labelValue}</label>
            <Datetime onChange={props.onChange} dateFormat="DD/MM/YYYY" timeFormat={false} value={new Date(props.value)} />
        </FormGroup>;
import IInputProperties from "./common/IProperties";

import { input, label } from "../../styles/form";
import FormGroup from "./common/FormGroup";
import Select from "./Select";
import DatePicker from "./DatePicker";

const Input = (props: IInputProperties) =>
    <FormGroup>
        <label className={label}>{props.labelValue}</label>
        <input type={props.type ?? "text"} className={input} disabled={props.disabled ?? false} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
    </FormGroup>;

export default Input;
export { Select, DatePicker };
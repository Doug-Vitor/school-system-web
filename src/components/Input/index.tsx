import IInputProperties from "./common/IProperties";

import FormGroup from "./common/FormGroup";
import Select from "./Select";
import DatePicker from "./DatePicker";

const Input = (props: IInputProperties) =>
    <FormGroup>
        <label>{props.labelValue}</label>
        <input type={props.type ?? "text"} className="transition ease-in p-[9px] w-[100%] mx-[0.6vw] bg-transparent border-0 border-b-[1px] border-black outline-none focus:rounded-[4px] focus:border-none focus:shadow-lg" disabled={props.disabled ?? false} value={props.value} onChange={props.onChange} />
    </FormGroup>;

export default Input;
export { Select, DatePicker };
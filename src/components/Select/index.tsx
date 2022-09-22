import { MouseEventHandler } from "react"

export interface SelectOption {
    id: string
    optionText: string
}

interface Props {
    defaultLabel?: string
    options?: Array<SelectOption>
    onClick: MouseEventHandler
}

export default (props: Props) =>
    <select onClick={props.onClick}>
        <option defaultChecked={true}>{props.defaultLabel ?? "Selecione uma opção"}</option>
        {props.options?.map(getSelectOptions)}
    </select>

const getSelectOptions = (value: SelectOption) => <option key={value.id} value={value.id}>{value.optionText}</option>
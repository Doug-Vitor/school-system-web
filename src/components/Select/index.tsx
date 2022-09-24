import { ChangeEventHandler } from "react"

import './index.scss'

export interface SelectOption {
    id: string
    optionText: string
}

interface Props {
    defaultLabel?: string
    options: Array<SelectOption>
    selectedId?: string
    onChange: ChangeEventHandler<HTMLSelectElement>
}

export default (props: Props) => {
    const { defaultLabel, selectedId, options, onChange } = props;

    const getSelectOptions = () =>
        options.map(value => <option key={value.id} defaultChecked={value.id === selectedId} value={value.id}>{value.optionText}</option>)

    return (
        <select onChange={onChange}>
            <option defaultChecked={selectedId === ''}>{defaultLabel ?? "Selecione uma opção"}</option>
            {getSelectOptions()}
        </select>
    )
}

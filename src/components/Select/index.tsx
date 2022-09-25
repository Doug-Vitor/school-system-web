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
        options.map(value => <option key={value.id} value={value.id}>{value.optionText}</option>)

    return (
        <select defaultValue={selectedId || ''} onChange={onChange}>
            <option>{defaultLabel ?? "Selecione uma opção"}</option>
            {getSelectOptions()}
        </select>
    )
}

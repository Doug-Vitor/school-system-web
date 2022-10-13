import { flex } from "../../../../styles";
import { button } from "../../../../styles/button";

import { MouseEventHandler } from "react";

interface Props {
    title: string
    showButton?: boolean
    onDeleteClick: MouseEventHandler
}

export default (props: Props) => {
    const { title, showButton, onDeleteClick } = props;

    return (
        <div className="flex flex-col items-center justify-between m-2 md:flex-row">
            <label>{title}</label>
            {showButton &&
                <p className={`text-black underline hover:text-danger-hover hover:cursor-pointer`} onClick={onDeleteClick}>
                    Remover todos
                </p>
            }
        </div>
    );
}
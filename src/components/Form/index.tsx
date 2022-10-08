import React, { FormEventHandler } from "react"

import { flex } from "../../styles";
import PageTitle from "../PageTitle";

type FormSize = "small" | "medium" | "large";
interface Props {
    className?: string
    size?: FormSize
    title?: string
    onSubmit: FormEventHandler,
    children: React.ReactNode
}

const getCommonClasses = (size?: FormSize) => {
    const classes = `${flex} flex-col bg-[#e7e7e7d2] w-[20%] rounded-[2%] shadow-custom px-[4vh] pt-[4vh] pb-[8vh]`;

    switch (size) {
        case "medium": return classes + " !w-[50%]";
        case "large": return classes + " !w-[80%]";
        default: return classes;
    }
}

export default (props: Props) => {
    const { className, size, title, onSubmit, children } = props;

    return (
        <form className={`${className} ${getCommonClasses(size)}`} onSubmit={onSubmit}>
            {title && <PageTitle text={title} />}
            {children}
        </form>
    );
}
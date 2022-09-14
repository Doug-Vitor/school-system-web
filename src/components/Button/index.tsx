import { ButtonHTMLAttributes, MouseEventHandler } from "react"

interface Props {
    text: string
    type?: "button" | "submit"
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default (props: Props) => 
    <button type={props.type ?? "button"} className={"btn " + props.className} onClick={props.onClick}>{props.text}</button>
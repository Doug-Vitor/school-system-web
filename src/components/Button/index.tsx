import { MouseEventHandler } from "react"

interface Props {
    text: string
    type?: "button" | "submit"
    className?: "btn-success" | "btn-info" | "btn-danger"
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default (props: Props) => 
    <button type={props.type ?? "button"} className={"btn " + props.className} onClick={props.onClick}>{props.text}</button>
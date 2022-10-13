import { MouseEventHandler } from "react"
import * as classes from '../../styles/button';

interface Props {
    text: string
    type?: "button" | "submit"
    className?: "success" | "info" | "danger"
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default (props: Props) => 
    <button type={props.type ?? "button"} className={classes[props.className ?? 'button']} onClick={props.onClick}>{props.text}</button>
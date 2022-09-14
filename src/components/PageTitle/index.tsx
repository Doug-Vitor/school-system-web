interface Props {
    text: string
}

import './index.scss';
export default (props: Props) => <h2>{props.text}</h2>
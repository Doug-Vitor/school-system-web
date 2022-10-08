import { MouseEventHandler } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

interface Props {
    onPlusClick: MouseEventHandler
    onDeleteClick: MouseEventHandler
}

export default (props: Props) =>
    <span className="[&>*]:mx-[3px]">
        <FontAwesomeIcon icon={faSquarePlus} onClick={props.onPlusClick} color="#00a22b" size='lg' />
        <FontAwesomeIcon icon={faRectangleXmark} onClick={props.onDeleteClick} color="#a20000" size='lg' />
    </span>
import { MouseEventHandler } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleXmark, faSquarePlus } from '@fortawesome/free-regular-svg-icons';

interface Props {
    shouldRenderPlusIcon?: boolean
    shouldRenderDeleteIcon?: boolean
    onPlusClick: MouseEventHandler
    onDeleteClick: MouseEventHandler
}

export default (props: Props) => {
    const { shouldRenderPlusIcon, shouldRenderDeleteIcon, onPlusClick, onDeleteClick } = props;

    return (
        <span className="ml-2 [&>*]:mx-[3px]">
            {shouldRenderPlusIcon !== false && <FontAwesomeIcon icon={faSquarePlus} onClick={onPlusClick} color="#00a22b" size='lg' />}
            {shouldRenderDeleteIcon !== false && <FontAwesomeIcon icon={faRectangleXmark} onClick={onDeleteClick} color="#a20000" size='lg' />}
        </span>
    );
}
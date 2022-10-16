import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import './index.css';
export default () => {
    const { isLoading } = useSelector((state: RootState) => state.loading);

    return (
        <div className={`flex absolute justify-center items-center w-[100%] h-[100%] pb-[80px] bg-[#bababa] opacity-50 ${!isLoading && 'hidden'}`}>
            <span className="w-[50px] h-[50px] border-[3px] border-solid border-white rounded-[50%] border-t-[#252121] loader"></span>
        </div>
    );
}
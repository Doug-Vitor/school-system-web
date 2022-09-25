import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import './index.scss';
export default () => {
    const { isLoading } = useSelector((state: RootState) => state.loading);
    console.log(isLoading)
    return <div className={`loader ${isLoading ? '' : 'disabled'}`}><span className="loader"></span></div>
}
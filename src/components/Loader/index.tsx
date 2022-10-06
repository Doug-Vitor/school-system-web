import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export default () => {
    const { isLoading } = useSelector((state: RootState) => state.loading);
    return <div className={`loader ${isLoading ? '' : 'disabled'}`}><span className="loader"></span></div>
}
import Brand from './Items/Brand';
import MainItems from './Items/Main';
import AuthenticationItems from './Items/Authentication';

export default () =>
    <nav className='bg-red-600'>
        <Brand />
        <MainItems />
        <AuthenticationItems />
    </nav>;
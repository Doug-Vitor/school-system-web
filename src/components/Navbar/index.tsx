import Brand from './Items/Brand';
import MainItems from './Items/Main';
import AuthenticationItems from './Items/Authentication';

export default () =>
    <nav>
        <Brand />
        <MainItems />
        <AuthenticationItems />
    </nav>;
import Brand from './Items/Brand';
import MainItems from './Items/Main';
import AuthenticationItems from './Items/Authentication';

import './index.scss'
export default () =>
    <nav>
        <Brand />
        <MainItems />
        <AuthenticationItems />
    </nav>;
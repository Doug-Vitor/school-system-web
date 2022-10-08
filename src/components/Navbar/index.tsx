import Brand from './Items/Brand';
import MainItems from './Items/Main';
import AuthenticationItems from './Items/Authentication';

import { flex } from '../../styles';

export default () =>
    <nav className={`${flex} shadow-2xl bg-primary-main text-white md:h-[10vh] mb-[3.5vh] px-[8vh] [&>*>*]:m-[1vh] [&>*>*]:cursor-pointer`}>
        <Brand />
        <MainItems />
        <AuthenticationItems />
    </nav>;
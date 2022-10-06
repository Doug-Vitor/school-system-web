import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { publicRoutes, privateRoutes } from './routes';

import Protected from './components/Area/Protected';
import Loader from './components/Loader';

import Navbar from './components/Navbar';
import Home from './pages/Home';

export default () =>
    <BrowserRouter>
        <Loader />
        <Navbar />

        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                {publicRoutes.map(mapPublicRoutes)}
                {privateRoutes.map(mapProtectedRoutes)}
            </Routes>
        </main>
    </BrowserRouter>;

const mapPublicRoutes = (({ path, element }: any, key: any) => <Route path={path} element={element} key={key} />)
const mapProtectedRoutes = (({ path, element }: any, key: any) => <Route path={path} element={<Protected>{element}</Protected>} key={key} />)
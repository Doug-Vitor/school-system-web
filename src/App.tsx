import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes';

import Navbar from './components/Navbar';
import Home from './pages/Home';

export default () =>
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                {routes.map(({ path, element }, key) => <Route path={path} element={element} key={key} />)}
            </Routes>
        </BrowserRouter>
    </>;
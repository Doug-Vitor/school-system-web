import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/shared/NotFound';

export default () =>
    <BrowserRouter>
        <Routes>
            <Route caseSensitive path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
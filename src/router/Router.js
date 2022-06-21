import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

function Router() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail" element={<Detail />} />
        </Routes>
    )
}
export default Router;
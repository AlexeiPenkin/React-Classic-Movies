import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Adventure from './pages/Adventure';
import Comedy from './pages/Comedy';
import Detective from './pages/Detective';
import Drama from './pages/Drama';
import Military from './pages/Military';
import Cartoons from './pages/Cartoons';
import Favourite from './pages/Favourite';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='adventure' element={<Adventure />} />
            <Route path='comedy' element={<Comedy />} />
            <Route path='detective' element={<Detective />} />
            <Route path='drama' element={<Drama />} />
            <Route path='military' element={<Military />} />
            <Route path='cartoons' element={<Cartoons />} />
            <Route path='favourite' element={<Favourite />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
        </Routes>
    );
}

export default App;

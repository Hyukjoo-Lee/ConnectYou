import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './main/Landing';
import Login from './main/Login';
import Register from './main/Register';
import LandingHeader from './common/LandingHeader';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Header" element={<LandingHeader />} />
            </Routes>
        </>
    );
}

export default App;

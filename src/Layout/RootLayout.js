import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
const RootLayout = () => {

    return (
        <>
            {/* Show navigation in all components */}
            <Navbar />  
            {/* Show the all components here */}
            <Outlet />
        </>
    )
}

export default RootLayout;;
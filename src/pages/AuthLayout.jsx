import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-gray-200 min-h-screen'> 
           <header className='w-10/12 mx-auto pt-10'>
           <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
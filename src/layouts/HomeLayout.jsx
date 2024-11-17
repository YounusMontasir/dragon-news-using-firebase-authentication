import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../layout-component/LeftNavbar';
import RightNavbar from '../layout-component/RightNavbar';
import CategoryNews from '../pages/CategoryNews';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto mt-8'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='mt-10'><Navbar></Navbar> </nav>
            </header>
            <main className='w-10/12 mx-auto grid grid-cols-4  gap-6 mt-16'>
                <aside className=''>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-2'>
                   <Outlet></Outlet>
                </section>
                <section>
                    <RightNavbar></RightNavbar>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;
import React from 'react';
import SiteLogin from '../components/SiteLogin';
import FindUs from '../components/FindUs';

const RightNavbar = () => {
    return (
        <div className='space-y-10'>
            <SiteLogin></SiteLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavbar;
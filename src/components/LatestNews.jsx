import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 p-2 bg-gray-200 items-center'>
            <p className='p-2 bg-[#D72050] text-white text-xl font-semibold '>Latest</p>
            <Marquee pauseOnHover={true} className="space-x-10">
                <Link to="/news"> <p className='font-semibold text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, id!</p></Link>
                <Link to="/news"> <p className='font-semibold text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, id!</p></Link>
                <Link to="/news"> <p className='font-semibold text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, id!</p></Link>
            </Marquee>
           
        </div>
    );
};

export default LatestNews;
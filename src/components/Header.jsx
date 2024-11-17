import React from 'react';
import logo from "../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <p className='text-[18px] text-[#706F6F] mt-5 mb-3'>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] text-[18px]'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;
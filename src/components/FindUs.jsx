import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
        <p className='font-bold text-2xl mb-3'>Find us on</p>
      <div class="join flex join-vertical *:bg-base-100 *:text-[18px]">
        <button class="btn join-item"><FaFacebook></FaFacebook> FaceBook</button>
        <button class="btn join-item"><FaTwitter></FaTwitter> Twitter</button>
        <button class="btn join-item"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;

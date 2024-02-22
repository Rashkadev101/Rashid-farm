//import React from 'react'

import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
  FaTiktok,
} from 'react-icons/fa';

const Footer = () => {
  //define handleScrollUp
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className=''>
        {/**footer */}
        <div className='flex flex-wrap flex-row justify-around items-center h-72 bg-slate-800 text-slate-100 max-sm:bg-red-800 max-sm:text-center max-sm:h-96'>
          {/**left */}
          <div className='p-3'>
            <FaLeaf />
            <h1 className='text-xl text-green-700 font-bold uppercase'>
              rashid fruits
            </h1>
            <p>
              There are many variations of passages of Lorem
              <br /> Ipsum available, but the majority have suffered <br />
              alteration in some form
            </p>
            <div className='flex space-x-5 items-center text-lg mt-4'>
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedin />
              <FaTiktok />
            </div>
          </div>
          {/**center */}
          <div>
            <h2 className='text-lg font-bold capitalize '>quick link</h2>
            <ul className='flex flex-col gap-2 pt-3 capitalize'>
              <li>about us</li>
              <li>location & store</li>
              <li>help & FAQs</li>
              <li>news</li>
            </ul>
          </div>
          {/**right */}
          <div>
            <h2 className='text-lg font-bold capitalize'>location</h2>
            <div className='flex flex-col gap-2 pt-3 capitalize'>
              <p>mogadishu, somalia</p>
              <p>makkah, almukaramah streat</p>
              <p>Tell: +252 612 015 866</p>
            </div>
          </div>
        </div>
        {/**copyright */}
        <div className='flex  flex-row justify-around items-center bg-slate-700 text-white h-20  max-sm:p-3'>
          <div className='flex items-center space-x-3 capitalize text-sm'>
            <a href='#'>privacy & terms</a>
            <a href='#'>user agreement</a>
          </div>
          <div>
            <p className='text-sm capitalize '>
              rashid fruits Corporation &copy; 2025
            </p>
          </div>
          <div>
            <button
              onClick={handleScrollUp}
              className='bg-green-800 w-6 h-6 text-sm px-1 rounded cursor-pointer'
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;


{/** */}

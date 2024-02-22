//import React from 'react'

import {
  FaPercentage,
  FaShippingFast,
  FaStar,
  FaStarHalf,
  FaUserClock,
} from 'react-icons/fa';

const Featured = () => {
  return (
    <>
      <div className='h-[190vh]  max-sm:h-[174rem]  max-md:h-[260vh]'>
        <div className=' py-16'>
          <h1 className='max-sm:text-xl text-center text-3xl font-black  capitalize'>
            organic food in good health you.
          </h1>
          <p className='max-sm:text-sm text-center text-lg py-5 '>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry`s <br /> standard dummy
            text ever since the 1500s,
          </p>
        </div>
        {/**cards */}
        <div className='flex flex-wrap gap-7 justify-center p-5'>
          {/**card 1 */}
          <div className='w-80 h-96 text-center shadow-lg'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/027/536/309/original/green-lemon-green-lemon-green-lemon-transparent-background-ai-generative-free-png.png'
              alt=''
              className='w-48 m-auto'
            />
            <div>
              <h2 className='text-xl font-medium capitalize'>green lemon</h2>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className='text-lg'>$14.99 USD</p>
            </div>
            <button className='bg-black text-white w-44 h-10 capitalize cursor-pointer my-5'>
              buy now
            </button>
          </div>
          {/**card 2 */}
          <div className='w-80 h-96 text-center shadow-lg'>
            <img
              src='https://demo.webdigify.com/WCM02/WCM055_agriosa/wp-content/uploads/2022/02/08-01.jpg'
              alt=''
              className='w-48 m-auto'
            />
            <div>
              <h2 className='text-xl font-medium capitalize'>
                splorias tomato
              </h2>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className='text-lg'>$12.99 USD</p>
            </div>
            <button className='bg-black text-white w-44 h-10 capitalize cursor-pointer my-5'>
              buy now
            </button>
          </div>
          {/**card 3 */}
          <div className='w-80 h-96 text-center shadow-lg'>
            <img
              src='https://demo.webdigify.com/WCM02/WCM055_agriosa/wp-content/uploads/2022/02/14-01.jpg'
              alt=''
              className='w-48 m-auto'
            />
            <div>
              <h2 className='text-xl font-medium capitalize'>fruit seeds</h2>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className='text-lg'>$15.99 USD</p>
            </div>
            <button className='bg-black text-white w-44 h-10 capitalize cursor-pointer my-5'>
              buy now
            </button>
          </div>
          {/**card 4 */}
          <div className='w-80 h-96 text-center shadow-lg'>
            <img
              src='https://demo.webdigify.com/WCM02/WCM055_agriosa/wp-content/uploads/2022/02/13-01.jpg'
              alt=''
              className='w-48 m-auto'
            />
            <div>
              <h2 className='text-xl font-medium capitalize'>
                organic cabbage
              </h2>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className='text-lg'>$13.99 USD</p>
            </div>
            <button className='bg-black text-white w-44 h-10 capitalize cursor-pointer my-5'>
              buy now
            </button>
          </div>
          {/**card 5 */}
          <div className='w-80 h-96 text-center shadow-lg'>
            <img
              src='https://demo.webdigify.com/WCM02/WCM055_agriosa/wp-content/uploads/2022/02/12-01.jpg'
              alt=''
              className='w-48 m-auto'
            />
            <div>
              <h2 className='text-xl font-medium capitalize'>
                organic farm fresh ginger
              </h2>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className='text-lg'>$14.99 USD</p>
            </div>
            <button className='bg-black text-white w-44 h-10 capitalize cursor-pointer my-5'>
              buy now
            </button>
          </div>
          {/**card 6 */}
          <div className='w-80 h-96 text-center shadow-lg'>
            <img
              src='https://demo.webdigify.com/WCM02/WCM055_agriosa/wp-content/uploads/2022/02/02-01.jpg'
              alt=''
              className='w-48 m-auto'
            />
            <div>
              <h2 className='text-xl font-medium capitalize'>
                fresh blueberry
              </h2>
              <div className='flex justify-center space-x-4 py-4'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>
              <p className='text-lg'>$11.99 USD</p>
            </div>
            <button className='bg-black text-white w-44 h-10 capitalize cursor-pointer my-5'>
              buy now
            </button>
          </div>
        </div>
      </div>
      {/**buy our products */}
      <div className='bg-slate-950 text-slate-200 h-80 max-sm:h-[80vh]  max-md:h-[75vh]'>
        <div className='flex flex-wrap items-center justify-center space-x-16 py-20'>
          {/**items 1 */}
          <div className=' text-center'>
            <FaShippingFast className='max-sm:text-xl m-auto text-4xl' />
            <h2 className='max-sm:text-sm text-xl font-medium py-2 capitalize'>
              buyer protection
            </h2>
            <p className='max-sm:text-sm'>
              Lorem Ipsum is simply dummy text of the
              <br /> printing and typesetting industry.
            </p>
          </div>
          {/**items 2 */}
          <div className='text-center max-sm:relative max-sm:-left-8 max-sm:top-7'>
            <FaUserClock className='max-sm:text-xl m-auto text-4xl' />
            <h2 className='max-sm:text-sm text-xl font-medium py-2 capitalize'>
              24/7 live support
            </h2>
            <p className='max-sm:text-sm'>
              Lorem Ipsum is simply dummy text of the
              <br /> printing and typesetting industry.
            </p>
          </div>
          {/**items 3 */}
          <div className='max-md:relative max-md:-left-8 max-md:top-8 text-center max-sm:relative max-sm:-left-8 max-sm:top-16'>
            <FaPercentage className='max-sm:text-xl m-auto text-4xl' />
            <h2 className='max-sm:text-sm text-xl font-medium py-2 capitalize'>
              special discounts
            </h2>
            <p className='max-sm:text-sm'>
              Lorem Ipsum is simply dummy text of the
              <br /> printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;

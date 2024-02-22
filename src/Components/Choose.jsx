//import React from 'react'

import { FaLeaf, FaLemon, FaNutritionix } from 'react-icons/fa';

const Choose = () => {
  return (
    <>
      <div className=' max-sm:h-[210vh] h-[100vh]'>
        <div className='flex flex-wrap max-sm:p-7 justify-around '>
          {/**left */}
          <div className=''>
            <img
              src='https://st3.depositphotos.com/1004713/14988/i/450/depositphotos_149889242-stock-photo-farmer-with-freshly-picked-vegetables.jpg'
              alt=''
              className=' w-[28em] h-[80vh] object-cover rounded-md'
            />
          </div>
          {/**right */}
          <div className=''>
            <h2 className='max-sm:text-xl max-sm:px-8 text-3xl font-bold capitalize'>
              We do not buy from the
              <br /> open market & traders.
            </h2>
            <p className='max-sm:px-9 capitalize py-4'>Why Choose us?</p>
            {/**choose products */}
            <div>
              {/**product 1 */}
              <div className='flex items-center space-x-5 py-4'>
                <FaLemon className='text-3xl text-yellow-300' />
                <div>
                  <h3 className='text-xl capitalize font-medium'>
                    fresh lemon
                  </h3>
                  <p className='py-2'>
                    It is a long established fact that a reader will be
                    distracted
                    <br /> by the readable content of a page when looking at its
                    layout.
                  </p>
                </div>
              </div>
              {/**product 2 */}
              <div className='flex items-center space-x-5 py-4'>
                <FaLeaf className='text-3xl text-green-600' />
                <div>
                  <h3 className='text-xl capitalize font-medium'>
                    100% fresh
                  </h3>
                  <p className='py-2'>
                    It is a long established fact that a reader will be
                    distracted
                    <br /> by the readable content of a page when looking at its
                    layout.
                  </p>
                </div>
              </div>
              {/**product 3 */}
              <div className='flex items-center space-x-5 py-4'>
                <FaNutritionix className='text-3xl text-gray-600' />
                <div>
                  <h3 className='text-xl capitalize font-medium'>
                    100% fresh organic
                  </h3>
                  <p className='py-2'>
                    It is a long established fact that a reader will be
                    distracted
                    <br /> by the readable content of a page when looking at its
                    layout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;

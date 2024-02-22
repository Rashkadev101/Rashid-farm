//import React from 'react'

const NewsLatter = () => {
  return (
    <>
      <div className='bg-green-950 text-slate-100 h-[40vh] py-14'>
        <div className='flex  flex-row flex-wrap justify-around items-center max-sm:text-sm'>
          <div>
            <h2 className='text-3xl font-semibold capitalize'>
              SUBSCRIBE NEWSLETTER.
            </h2>
            <p className='py-3'>
              Why do we use it? It is a long established fact that a reader will
              be
              <br /> distracted by the readable content of a page.
            </p>
          </div>
          <div className='flex flex-wrap items-center max-sm:mt-4'>
            <input
              type='email'
              placeholder='Your Email* Address'
              className='w-[25em] h-11 px-3'
            />
            <button className='bg-green-800 h-11 w-24 text-lg capitalize cursor-pointer'>
              subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLatter;





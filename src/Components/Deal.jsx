import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const Deal = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className='  max-sm:h-[210vh] max-sm:text-center max-sm:p-5 h-[100vh] overflow-x-hidden overflow-y-hidden'>
        {/**deal products */}
        <div className='flex flex-wrap justify-center items-center m-auto   '>
          {/**left */}
          <div className=' '>
            <h1 className='max-sm:text-xl text-4xl font-black py-4 capitalize'>
              DEAL OF THE WEEK!
            </h1>
            <h4 className='max-sm:text-sm text-xl py-3 capitalize'>Roasted corn</h4>
            <strong className='max-sm:text-sm font-bold text-lg'>$14.99 USD</strong>
            <p className='max-sm:text-sm py-4'>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and
              <br /> typesetting industry. Lorem Ipsum has been the industry`s
              standard dummy text
              <br /> ever since the 1500s,
            </p>
            <div>
              <p className='text-green-700 capitalize'>rating: 5/4.6</p>
            </div>
            <div>
              <button className='bg-green-600 w-36 h-10 text-lg font-normal relative top-14 capitalize cursor-pointer rounded'>
                show now
              </button>
            </div>
          </div>
          {/**right */}
          <div className='max-sm:py-24'>
            <img
              src='https://freebw.com/templates/oragnive-v1/images/other-02.png'
              alt=''
              className='w-[550px]'
            />
            <div className='max-sm:w-48 max-sm:m-auto max-sm:my-16 flex flex-row flex-wrap gap-6 h-11 px-5 py-1 my-5 rounded-lg space-x-8  font-medium'>
              <div className='max-sm:mx-8 bg-green-800 w-20 h-10 py-2 px-2 cursor-pointer text-slate-100 rounded'>
                Days: {timeLeft.days}
              </div>
              <div className='bg-green-800 w-24 h-10 py-2 px-3 cursor-pointer text-slate-100 rounded'>
                Hours: {timeLeft.hours}
              </div>
              <div className='bg-green-800 w-28 h-10 py-2 px-3 cursor-pointer text-slate-100 rounded'>
                Minutes: {timeLeft.minutes}
              </div>
              <div className='bg-green-800 w-28 h-10 py-2 px-3 cursor-pointer text-slate-100 rounded'>
                Seconds: {timeLeft.seconds}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deal;

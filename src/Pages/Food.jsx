//import React from 'react'

import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaLinkedin,
  FaSearch,
  FaTiktok,
} from 'react-icons/fa';

const Food = () => {
  //define handleScrollUp
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className='bg-slate-800'>
        {/**Header */}
        <header className=' flex items-start justify-between  text-white  p-3 max-w-6xl mx-auto z-20 xl:items-center'>
          {/**left side */}
          <div>
            <h2 className='capitalize hover:underline cursor-pointer '>
              spiceal products
            </h2>
          </div>
          <div>
            <FaLeaf />
            <h1 className='text-xl text-slate-100 font-bold uppercase'>
              rashid fruits
            </h1>
          </div>

          {/**right */}
          <div className='flex flex-row  space-x-5'>
            <div className='flex flex-row space-x-5'>
              <FaFacebookF />
              <FaInstagram />
              <FaLinkedin />
              <FaTiktok />
            </div>
            <div>
              <FaSearch />
            </div>
          </div>
        </header>
      </div>
      {/**products hero */}
      <div className='bg-gradient-to-r from-indigo-900 to-green-950 text-white h-[80vh]'>
        <div className='flex justify-around pt-28'>
          {/**left */}
          <div className='w-[50%]'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/027/536/309/original/green-lemon-green-lemon-green-lemon-transparent-background-ai-generative-free-png.png'
              alt=''
              className='w-[80%] relative -top-36'
            />
          </div>
          {/**right */}
          <div className='w-[50%]'>
            <h4 className='text-xl capitalize'>welcome to rashid fruits</h4>
            <h1 className='text-5xl font-black pt-3 capitalize'>
              fresh organic food
            </h1>
            <p className='pt-3'>
              It is a long established fact that a reader will be distracted by
              the
              <br /> readable content of a page
            </p>
            <button className='bg-green-800 w-32 h-10 mt-3 text-white capitalize cursor-pointer rounded'>
              order now
            </button>
          </div>
        </div>
      </div>
      {/**latest news */}
      <div>
        <section className='py-16 bg-gray-100 h-[50vh] text-center'>
          <p className='text-lg capitalize'>our special products</p>
          <h1 className='text-3xl font-black pt-3 capitalize'>
            latest news & food safety
          </h1>
          <p className='pt-3'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
            <br /> The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters,
          </p>
        </section>
        {/**latest news inside */}
        <div className=' h-[190vh]'>
          {/**latest news cards */}
          <div className='flex flex-wrap flex-row justify-center items-center gap-7 pt-20'>
            {/**card one */}
            <div className='shadow-md w-[58vh] h-[80vh] rounded'>
              <img
                src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/10/citrus-fruits-and-vitamin-c-lessons-for-kids-jpg.webp'
                alt=' '
                className='w-[100%] h-64 object-cover'
              />
              <div></div>
              <div className='pt-5 px-4'>
                <p className='capitalize text-sm font-normal'>
                  rashid othman 79k others || comments
                </p>
                <h3 className='text-xl font-semibold  capitalize'>
                  citrus fruits
                </h3>
                <p className='pt-2'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            {/**card tow*/}
            <div className='shadow-md rounded w-[58vh] h-[80vh]'>
              <img
                src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/10/citrus-fruits-and-vitamin-c-lessons-for-kids-jpg.webp'
                alt=' '
                className='w-[100%] h-64 object-cover'
              />
              <div></div>
              <div className='pt-5 px-4'>
                <p className='capitalize text-sm font-normal'>
                  rashid othman 79k others || comments
                </p>
                <h3 className='text-xl font-semibold  capitalize'>
                  citrus fruits
                </h3>
                <p className='pt-2'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            {/**card three */}
            <div className='shadow-md rounded w-[58vh] h-[80vh]'>
              <img
                src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/10/citrus-fruits-and-vitamin-c-lessons-for-kids-jpg.webp'
                alt=' '
                className='w-[100%] h-64 object-cover'
              />
              <div></div>
              <div className='pt-5 px-4'>
                <p className='capitalize text-sm font-normal'>
                  rashid othman 79k others || comments
                </p>
                <h3 className='text-xl font-semibold  capitalize'>
                  citrus fruits
                </h3>
                <p className='pt-2'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            {/**card four */}
            <div className='shadow-md rounded w-[58vh] h-[80vh]'>
              <img
                src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/10/citrus-fruits-and-vitamin-c-lessons-for-kids-jpg.webp'
                alt=' '
                className='w-[100%] h-64 object-cover'
              />
              <div></div>
              <div className='pt-5 px-4'>
                <p className='capitalize text-sm font-normal'>
                  rashid othman 79k others || comments
                </p>
                <h3 className='text-xl font-semibold  capitalize'>
                  citrus fruits
                </h3>
                <p className='pt-2'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            {/**card five */}
            <div className='shadow-md rounded w-[58vh] h-[80vh]'>
              <img
                src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/10/citrus-fruits-and-vitamin-c-lessons-for-kids-jpg.webp'
                alt=' '
                className='w-[100%] h-64 object-cover'
              />
              <div></div>
              <div className='pt-5 px-4'>
                <p className='capitalize text-sm font-normal'>
                  rashid othman 79k others || comments
                </p>
                <h3 className='text-xl font-semibold  capitalize'>
                  citrus fruits
                </h3>
                <p className='pt-2'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
            {/**card six */}
            <div className='shadow-md rounded w-[58vh] h-[80vh]'>
              <img
                src='https://www.euroschoolindia.com/blogs/wp-content/uploads/2023/10/citrus-fruits-and-vitamin-c-lessons-for-kids-jpg.webp'
                alt=' '
                className='w-[100%] h-64 object-cover'
              />
              <div></div>
              <div className='pt-5 px-4'>
                <p className='capitalize text-sm font-normal'>
                  rashid othman 79k others || comments
                </p>
                <h3 className='text-xl font-semibold  capitalize'>
                  citrus fruits
                </h3>
                <p className='pt-2'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry`s
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**spiceal offers */}
      <div className=' h-[70vh]'>
        <div className='flex justify-between items-center'>
          {/**left */}
          <div className='offersLeft'>
            <p>spiceal products offers</p>
            <h2>get 45% off</h2>
            <button className='bg-green-800 w-36 h-10 mt-4 text-white capitalize cursor-pointer rounded'>
              shop new
            </button>
          </div>
          {/**right */}
          <div className='offersRight'>
            <img
              src='https://media.istockphoto.com/id/1397366522/photo/farmer-holding-wooden-box-full-of-fresh-vegetables-basket-with-vegetable-man-holding-big-box.jpg?b=1&s=612x612&w=0&k=20&c=utCrHIh22V7t1xpLp1YJfSIrNHU0SdIhZ7xPO3n6_Qc='
              alt=''
              className=''
            />
          </div>
        </div>
      </div>
      {/**footer */}
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

export default Food;

 <header className='  flex items-start justify-between p-5 max-w-6xl mx-auto z-20 xl:items-center'>
          <motion.div
            initial={{
              x: -500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className='flex items-center space-x-2'
          >
            <FaLeaf />
            <h1 id='logo'>rashid fruits</h1>
          </motion.div>

          {/**right */}
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className='flex flex-row items-center space-x-8'
          >
            <nav className='hidden md:inline-flex'>
              <ul className='flex flex-row space-x-5 text-base capitalize cursor-pointer'>
                <div className='flex items-center space-x-2'>
                  <Link to='/products' id='spec
                    special products
                  </Link>
                  <FaAngleDown />
                </div>

                <Link to='/food' id='food'>
                  food safety
                </Link>
              </ul>
            </nav>
            {/**social icons */}
            <div className='flex flex-row items-center space-x-4'>
              <FaFacebookF />
              <FaInstagram />
              <FaTiktok />
              <FaLinkedin />
            </div>
            <div className='flex flex-row items-center space-x-2'>
              <FaEnvelope />
              <p className='hidden md:inline-flex text-sm uppercase'>
                get in touch
              </p>
            </div>
          </motion.div>
        </header>


        import { Cursor, useTypewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Lemon', 'Blueberry', 'Cabbage', 'Fresh Ginger', 'Tomato'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <div>
        <div className="bg-[url('https://img.freepik.com/premium-photo/blueberry-background-images-natural-colors-bright-background-generative-ai_913266-15893.jpg')] bg-no-repeat bg-center bg-cover h-[95vh] max-sm:h-[60vh]">
          <div className='max-sm:relative max-sm:-top-14 text-white px-28 py-24'>
            <p className='textOrganic'>100% organic food served</p>
            <div className=''>
              <h1 id='hight-Quality' className='max-sm:text-xl text-3xl font-black py-4'>
                High-Quality Organic products:
                <span className='text-red-400 uppercase'>{text}</span>
                <Cursor />
              </h1>
            </div>
            <p className='textdo'>
              Why do we use it? It is a long established fact that a reader will
              be distracted by the readable <br />
              content of a page when looking at its layout.
            </p>
            <div className='mt-12'>
              <button className='bg-slate-100 text-black cursor-pointer capitalize rounded  w-44 h-10'>
                find your fruits
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

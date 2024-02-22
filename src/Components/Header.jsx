import {Link} from "react-router-dom";
import { FaBars, FaLeaf, FaSearch, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-50 grid grid-cols-3  bg-white shadow-md p-5 md:px-10'>
        {/**Left */}
        <div className='relative flex items-center  h-10 my-auto'>
          <FaLeaf className='hidden lg:inline text-xl text-green-800' />
          <h2 id='logo'>
            rashid <strong className="text-green-800 ">Fruit</strong>
          </h2>
        </div>
        {/**Middle */}
        <div className='flex items-center md:shadow-sm md:border-2 rounded-full py-2'>
          <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400 capitalize' type='text' placeholder='Start your search..' />
          <FaSearch className='hidden md:inline-flex md:mx-2 bg-slate-800 text-white h-7 w-7 p-2 cursor-pointer rounded-full' />
        </div>
        {/**Right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
          <Link to="/products" className="hidden md:inline capitalize">special products</Link>
          <Link to="/food" className="hidden md:inline capitalize">food sefaty</Link>
          
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <FaBars/>
            <FaUserCircle/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

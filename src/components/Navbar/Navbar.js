import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-[#222222] h-24 flex justify-between items-center px-20'>
            <div>
                <Link to='/'><h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">Web Quizzie</h3></Link>
            </div>
            <div className='text-white font-semibold space-x-10'>
                <NavLink
                    className={({isActive}) => isActive ? `text-[#00eda4] border-b-2 border-green-500 duration-300`:'hover:text-green-400 duration-300'}
                    to='/'>Home</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? `text-[#00eda4] border-b-2 border-green-500 duration-300`:'hover:text-green-400 duration-300'}
                    to='/topics'>Topics</NavLink>
                <NavLink
                    className={({isActive}) => isActive ? `text-[#00eda4] border-b-2 border-green-500 duration-300`:'hover:text-green-400 duration-300'}
                    to='/statistics'>Statistics</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
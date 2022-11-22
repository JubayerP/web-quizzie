import { motion, useScroll } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  return (
    <div
      className={`bg-[#222222] px-20 ${
        open && "px-0"
      }`}
    >
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />
      <div className={`flex justify-between items-center ${open ? 'h-[200px] flex-col': 'h-24'}`}>
        <div>
          <Link to="/">
            <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">
              Web Quizzie
            </h3>
          </Link>
        </div>
        <div
          className={`text-white font-semibold space-x-10 md:static absolute ${
            open
              ? "top-[10%] bg-[#222222] w-full z-10 text-center"
              : "-top-10"
          }`}
        >
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `text-[#00eda4] border-b-2 border-green-500 duration-300`
                : "hover:text-green-400 duration-300"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `text-[#00eda4] border-b-2 border-green-500 duration-300`
                : "hover:text-green-400 duration-300"
            }
            to="/topics"
          >
            Topics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `text-[#00eda4] border-b-2 border-green-500 duration-300`
                : "hover:text-green-400 duration-300"
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `text-[#00eda4] border-b-2 border-green-500 duration-300`
                : "hover:text-green-400 duration-300"
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
      <div  className="text-white md:hidden block" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose size={20}/>
        ) : (
          <RiMenu3Fill size={20}/>
        )}
      </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, {useState} from 'react'
import {GiCrossFlare, GiHamburgerMenu} from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-bar-container  grid grid-cols-12  justify-between items-center  pt-4 relative">
      <div className="nav-bar-brand-container text-2xl md:text-4xl font-extrabold col-start-2 col-span-1">
        LearnerLab
      </div>
      <div className="nav-bar-login-console-container items-start col-start-11 sm:col-start-9 md:col-start-10 col-span-1 md:col-span-2">
        <div className="login-console-menu-wrapper grid sm:col-span-4 grid-cols-5 gap-0 justify-end items-center ">
          <div className="nav-bar-login grid col-span-3">
            <a href="/" className="login-link text-2xl text-gray-600 font-semibold  hidden md:flex">
              Sign in
            </a>
          </div>
          <div className="nav-bar-register">
            <button className="register rounded-full text-xl font-bold w-[137px] h-[55px] items-center justify-center text-white text-center bg-orange-500 hover:cursor-pointer hover:bg-orange-800 hidden md:flex">
              Sign up
            </button>
          </div>
        </div>
        <div className="hamburger md:hidden ">
          <button className="grid items-start justify-start" onClick={()=>setIsOpen(true)}>
            <GiHamburgerMenu size={"2rem"} />
          </button>
        </div>
        
      </div>
       {
       isOpen && <div className="mobile-drop-overlay flex flex-col h-screen w-min-screen fixed top-0 z-20 bg-white-800 backdrop-blur-xl gap-y-10 p-24">
        <div className="mobile-drop-overlay-item grid col-span-12 col-start-2">
          <a href="/" className="login-link text-3xl  text-gray-800 font-bold ">
            Sign in
          </a>
        </div>
        <div className="mobile-drop-overlay-item grid  justify-center">
          <button className="register rounded-full text-3xl font-bold w-[150px] h-[70px] items-center justify-center text-white text-center bg-gray-800 hover:cursor-pointer hover:bg-orange-800">
            Sign up
          </button>
        </div>
        <div className="mobile-drop-overlay-close absolute right-6 top-6">
          <button onClick={()=>setIsOpen(false)} className="register rounded-full text-3xl font-bold  items-center justify-center text-gray-800 text-center  hover:cursor-pointer" >
            <MdOutlineClose size={"3rem"} />
          </button>
        </div>
        </div>
      }
    </div> 
  );
}

export default NavBar
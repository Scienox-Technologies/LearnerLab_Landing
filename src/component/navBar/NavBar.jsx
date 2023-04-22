import React from 'react'

const NavBar = () => {
  return (
    <div className="nav-bar-container  grid grid-cols-12  justify-between items-center gap-5 pt-4">
      <div className="nav-bar-brand-container text-4xl font-extrabold col-start-2 col-span-1">
        LearnerLab
      </div>
      <div className="nav-bar-login-console-container col-start-10 col-span-2">
        <div className="login-console-menu-wrapper grid grid-cols-2 gap-5 items-center">
          <div className="nav-bar-login">
            <a href="/" className="login-link text-2xl text-gray-600 font-semibold">
              Sign in
            </a>
          </div>
          {/* <div className="nav-bar-register">
            <button className="register rounded-full text-xl font-bold w-[137px] h-[55px] flex items-center justify-center text-white text-center bg-orange-500 hover:cursor-pointer hover:bg-orange-800">
              Sign up
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar
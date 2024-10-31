// import React from 'react'

import logo from "../../assets/logo/AkeenSuaraLogo.png";

const Header = () => {
  return (
    <div className="w-full bg-white shadow-md h-[70px] text-white fixed z-40 flex justify-center items-center">
      <div className="w-[90%]">
        <img className="w-[75px] p-1" src={logo} alt="" />
      </div>
    </div>
  )
}

export default Header
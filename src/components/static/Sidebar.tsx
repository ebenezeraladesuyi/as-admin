// import React from 'react'

import { NavLink } from "react-router-dom"
import { LuFileAudio } from "react-icons/lu";
// import { AiTwotonePicture } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-full h-[100vh] p-[20px] text-white font-bold flex flex-col gap-6 pt-[120px] bg-[#23a1db]">

      {/* <NavLink to="/">
        <ol className="cursor-pointer text-white flex gap-2 items-center"><span className=""><AiTwotonePicture /></span>Upload Gallery</ol>
      </NavLink> */}

      <NavLink to="/">
        <ol className="cursor-pointer text-white flex gap-3 items-center text-[20px]"><span className=""><LuFileAudio /></span>Upload Blog</ol>
      </NavLink>

      <NavLink to="/subscribers">
        <ol className="cursor-pointer text-white flex gap-3 items-center text-[20px]"><span className=""><FaUsers /></span>All Subscribers</ol>
      </NavLink>
      
    </div>
  )
}

export default Sidebar
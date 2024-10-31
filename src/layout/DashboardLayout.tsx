// import React, { ReactNode } from 'react'

import { Header, Sidebar } from "../components"
import { Outlet } from 'react-router-dom'

// interface AdminDashProps {
//     children : ReactNode
// }

const DashboardLayout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col font-poppins'>
        <div className='w-full'>
            <Header />
        </div>

        <div className='w-full min-h-screen flex justify-betwee bg-[#e9e9e9]'>
            <div className='fixed min-h-screen w-[300px] '>
                <Sidebar />
            </div>

            <div className='w-[calc(100%-310px)] ml-[260px] min-h-screen bg-'>
                {/* {children} */}
                <Outlet />
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout;
import { SideBar } from './SideBar'
import { Outlet } from 'react-router'

export const VotersContainer = () => {
    return (
        <div className='w-screen h-screen flex '>
            <div className='w-[22%] sidebarbackground h-screen bg-white'>
                <SideBar />
            </div>
            <div className='w-[78%] h-screen text-black bg-white'>
               <Outlet/>
            </div>
        </div>
    )
}

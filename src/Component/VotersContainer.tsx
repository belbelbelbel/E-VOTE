import { SideBar } from './SideBar'
import { Outlet, useLocation } from 'react-router'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1280);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export const VotersContainer = () => {
    const [showOutlet, setShowOutlet] = useState(false);
    const location = useLocation();
    const isMobile = useIsMobile();
    
    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("GroupAId");
        localStorage.removeItem("GroupBId");
        localStorage.removeItem("GroupCId");
        window.location.href = "/";
    }
    useEffect(() => {
        if (location.pathname !== "/votes") {
            setShowOutlet(true);
        } else {
            setShowOutlet(false);
        }
    }, [location]);

    const capitalizeFirstLetter = (string: any) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var name = localStorage.getItem('username');
    const username = capitalizeFirstLetter(name);

    return (
        <div className='w-screen h-[100dvh]'>
            {/* Desktop Layout */}
            <div className='w-screen h-screen flex xl:flex  hidden '>
                <div className='w-screen h-screen xl:flex hidden flex'>
                    <div className='xl:w-[22%] w-full sidebarbackground h-screen bg-white'>
                        <SideBar />
                    </div>
                    <div className='xl:w-[78%] h-screen text-black bg-white'>
                        <Outlet />
                    </div>
                </div>
            </div>

            {/* Mobile Layout */}
            <div className='h-full w-full xl:hidden'>
                <div className='flex pt-[3rem] gap-[3rem] flex-col'>
                    <div className='flex items-center gap-[15vw] flex-col'>
                        <div><img src="/asset/Images/weblogo.png" alt="mOA" className='xl:w-[14vw] w-[46vw] w-[44vw] relative md:-top-[15vw] xl:top-0 xl:relative' /></div>
                        <div className='text-[#9C9C9C] xl:text-[43px] text-[7vw] fonts-small font-black flex gap-2'>
                            <span className='text-[#0250FC] fonts-mid'>Welcome,</span>
                            <span>{username}</span>
                        </div>
                    </div>
                    <div className='w-[85%] pt-[2rem] mx-auto justify-center flex flex-col gap-4'>
                        <div className='fonts-mid'>Select a category to vote</div>
                        <div className='flex flex-col gap-5'>
                            <div className='bg-[#0250FC] rounded-[10px] fonts-small font-extrabold flex items-center text-white text-[4.7vw] tracking-[4px] justify-center w-[100%] mx-auto h-[8vh]'>
                                <button><Link to="GroupA">GROUP A</Link></button>
                            </div>
                            <div className='bg-[#0250FC] fonts-small font-extrabold rounded-[10px] flex items-center text-white text-[4.7vw] tracking-[4px] justify-center w-[100%] mx-auto h-[8vh]'>
                                <button><Link to="GroupB">GROUP B</Link></button>
                            </div>
                            <div className='bg-[#0250FC] rounded-[10px] fonts-small font-extrabold flex items-center text-white text-[4.7vw] tracking-[4px] justify-center w-[100%] mx-auto h-[8vh]'>
                                <button><Link to="GroupC">GROUP C</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#F94040] cursor-pointer rounded-[6px] top-[15rem] text-white cursor-pointer h-[11vw] text-[4.1vw] items-center justify-center flex w-[61%] mx-auto'>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                </div>

                {/* Conditionally render Outlet on mobile */}
                <div className={`absolute w-full inset-0 bg-white h-full ${showOutlet ? 'slide-in' : 'hidden'}`}>
                    {!isMobile || location.pathname !== "/votes" ? <Outlet /> : null}
                </div>
            </div>
        </div>
    );
};

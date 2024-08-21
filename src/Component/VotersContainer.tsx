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
                <div className='flex md:pt-[5rem] pt-[3rem] md:gap-[4rem] gap-[2rem] flex-col'>
                    <div className='flex items-center h-full justify-center md:gap-[10vw] gap-[15vw] flex-col'>
                        <div><img src="/asset/Images/weblogo.png" alt="mOA" className='xl:w-[14vw] w-[46vw] w-[44vw] relative md:-toxp-[15vw] xl:top-0 xl:relative' /></div>
                        <div className='text-[#9C9C9C] xl:text-[43px] text-[7vw] fonts-small font-black flex gap-2'>
                            <span className='text-[#0250FC] fonts-mid'>Welcome,</span>
                            <span>{username}</span>
                        </div>
                    </div>
                    <div className='w-[85%] pt-[1rem] mx-auto   flex flex-col gap-2'>
                        <div className='fonts-mid text-[4.3vw]'>Select a category to vote</div>
                        <div className='flex flex-col gap-5'>
                            <Link to="GroupA" className='bg-[#0250FC] group_button rounded-[10px] fonts-small font-extrabold flex items-center text-white text-[4.7vw] tracking-[4px] justify-center w-[100%] mx-auto md:h-[10vh] h-[8vh]'>
                                <button>GROUP A</button>
                            </Link>
                            <Link to="GroupB" className='bg-[#0250FC] group_button fonts-small font-extrabold rounded-[10px] flex items-center text-white text-[4.7vw] tracking-[4px] justify-center w-[100%] md:h-[10vh] mx-auto h-[8vh]'>
                                <button>GROUP B</button>
                            </Link>
                            <Link to="GroupC" className='bg-[#0250FC] group_button rounded-[10px] fonts-small font-extrabold flex items-center text-white text-[4.7vw] tracking-[4px] justify-center w-[100%] md:h-[10vh] mx-auto h-[8vh]'>
                                <button>GROUP C</button>
                            </Link>
                        </div>
                    </div>
                    <div className='bg-[#F94040] cursor-pointer rounded-[6px] group_button relative -top-[1rem] text-white cursor-pointer md:h-[8vh] h-[6vh] text-[4.1vw] items-center justify-center flex w-[61%] mx-auto'>
                        <button onClick={handleLogout}>Log Out</button>
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

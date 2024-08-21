import "../Component/Styles/Entire.css";
import { Link, useLocation } from 'react-router-dom';

export const SideBar = () => {
    const { pathname } = useLocation();

    const isActive = (link: any) => {
        return pathname.includes(link);
    };

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("GroupAId");
        localStorage.removeItem("GroupBId");
        localStorage.removeItem("GroupCId");
        window.location.href = "/";

    }
    return (
        <div>
            <div className='flex flex-col h-full gap-[3vw] pt-[3vw]'>
                <Link to='/votes' className="items-center flex justify-center">
                    <img
                        loading="lazy"
                        src="/asset/Images/weblogo.png"
                        alt="weblogo"
                        className="xl:w-[12vw] w-[50vw] w-[44vw] relative -top-[37vw] md:-top-[15vw] xl:top-0 xl:relative"

                    />
                </Link>
                <div className='flex flex-col gap-[2vw] items-center fonts-small text-white justify-center text-center'>
                    <Link
                        to="GroupA"
                        className={`cursor-pointer h-[4.2vw] font-bold tracking-[4px] rounded-[2px] items-center justify-center flex w-full ${isActive("GroupA") ? "bg-[#0250FC] isActive" : "bg-[#C4C3C3]"
                            }`}
                    >
                        <button>
                            <div>GROUP A</div>
                        </button>
                    </Link>
                    <Link
                        to="GroupB"
                        className={`cursor-pointer h-[4.2vw] font-bold tracking-[4px] rounded-[2px] items-center justify-center flex w-full ${isActive("GroupB") ? "bg-[#0250FC] isActive" : "bg-[#C4C3C3]"
                            }`}
                    >
                        <button>
                            <div>GROUP B</div>
                        </button>
                    </Link>
                    <Link
                        to="GroupC"
                        className={`cursor-pointer h-[4.2vw] font-bold tracking-[4px] rounded-[2px] items-center justify-center flex w-full ${isActive("GroupC") ? "bg-[#0250FC] isActive" : "bg-[#C4C3C3]"
                            }`}
                    >
                        <button>
                            <div>GROUP C</div>
                        </button>
                    </Link>
                </div>
                <div className="relative  top-[20vw] h-full bg-red-400 flex items-center justify-center">
                    <div className='bg-[#F94040] rounded-[6px] absolute text-white cursor-pointer h-[3vw] text-[1.1vw] items-center justify-center flex w-[54%] mx-auto'>
                        <button onClick={handleLogout} className=" absolute ">Log out</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

import { ImArrowLeft2 } from "react-icons/im";
import { Link} from 'react-router-dom';

export const Greeting = () => {
    const capitalizeFirstLetter = (string:any) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
    var name =  capitalizeFirstLetter(localStorage.getItem('username'))
    const username = name;
    console.log(username)

    return (
        <div className='h-full w-full flex xl:flex hidden  justify-center'>
            <div className='flex pt-[5rem] flex-col gap-[4vw] items-center cursor-pointer'>
                <div className='text-[#9C9C9C] text-[43px] fonts-small font-black flex gap-2'>
                    <span className='text-[#0250FC] fonts-mid'>Welcome,</span>
                    <span>{username}</span>
                </div>
                <Link to="GroupA" className='fonts-mid leading-[4vw] text-center w-[45%] mx-auto text-[45px] text-[#171717] font-light'>
                    Click on the categories by your left to cast your vote
                </Link>
                <Link to="GroupA"><ImArrowLeft2 className='text-[4vw] cursor-pointer' /></Link>
            </div>
        </div>
    );
};

import React from 'react'
import "../Styles/Entire.css"
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdOutlineHowToVote } from "react-icons/md"
import { useNavigate } from 'react-router';
export const Signin = () => {
  const navigate = useNavigate()
  return (
    <div className='text-black w-screen py-[1rem] xl:py-0 h-screen xl:flex-row flex-col flex'>
      <div className=' h-screen hidden md:flex pt-[3.6rem] gap-[0vw] w-[49%] items-center gap-[4.6vw]  flex-col flex signup-background'>
        <div className='text-[#7D7D7D] w-[58%] text-center mx-auto tracking-[1.6px] font-extrabold leading-[3.3vw] uppercase text-[2.4vw]'>Foursquare vgc online voting platform</div>
        <div className=''>
          <img loading='lazy' src="/asset/Images/signupimage.svg" alt="signupimage" className=' w-[38vw]  ' />
        </div>
      </div>
      <div className='xl:w-[51%] w-screen  h-[100dvh] mx-auto  xl:pt-[5rem] flex flex-col items-center justify-center'>
        <div className='flex  flex-col   xl:w-[60%] w-[83%]  h-full justify-center xl:justify-start xl:gap-[12.4vw]   mx-auto'>
          <div className='items-center flex justify-center'>
            <img src="/asset/Images/weblogo.png" alt="weblogo" className='xl:w-[15vw] w-[50vw] absolute top-[15vw] xl:top-0 md:relative' />
          </div>
          <div className='flex flex-col gap-[1.8vw] xl:gap-[1.2vw]'>
            <div className=''>
              <div className='xl:text-[1vw] text-[3.8vw]  text-[#828282]'>Hello</div>
              <div className='flex fonts-text items-center xl:text-[1.1vw] text-[3.8vw] gap-[1vw] uppercase'><div>Login to cast your vote!</div> <div><MdOutlineHowToVote className='' /></div></div>
            </div>
            <div className='flex flex-col gap-[4.8vw] xl:gap-[1.5vw]'>
              <div className='flex items-center gap-[8px] bg-[#F2F2F2]  rounded-[8px] px-4 xl:py-[0.9vw] h-[3.4rem]  xl:h-[3.4rem]  w-full'>
                <IoPerson className='text-[#BDBDBD] xl:text-[1.5vw] text-[6vw]' />
                <input type="text" placeholder='Username' className='bg-transparent w-full outline-none border-none' />
              </div>
              <div className='flex items-center gap-[8px] bg-[#F2F2F2] rounded-[8px] px-4 xl:py-[0.9vw] h-[3.4rem] xl:h-[3.4rem]  w-full'>
                <FaLock className='text-[#BDBDBD] xl:text-[1.2vw] text-[5.4vw]' />
                <input type="text" placeholder='Password' className='bg-transparent w-full outline-none border-none' />
              </div>
              <div>
                <button className='bg-[#0250FC] text-white uppercase relative top-8 rounded-[3px] md:rounded-[6px] tracking-[1px] font-medium h-[3.3rem]  xl:h-[3.4rem]  w-full xl:py-[0.9vw]' onClick={() => navigate('/voters')}>Login</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='h-[1vw] xl:hidden  block w-[60%] mx-auto rounded-[4px] bg-black'>
        <div></div>
      </div>
    </div>
  )
}

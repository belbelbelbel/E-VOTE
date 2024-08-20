import React from 'react'
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router';
export const GroupsmallA = () => {
    const naviagte = useNavigate()
    const imgArray = [
        {
            src: '/asset/Images/voter1.png',
            alt: 'Image 1',
            id: 1,
            name: "Micheal Mene"
        },
        {
            src: '/asset/Images/voter8.png',
            alt: 'Image 2',
            id: 2,
            name: "Emily Johnson"
        },
        {
            src: '/asset/Images/voter3.png',
            alt: 'Image 3',
            id: 3,
            name: "John Doe"
        },
    ];
    return (
        <div className='w-screen h-screen'>
            <div className='w-full h-full'>
                <div className='flex  text-white justify-between h-[15%] items-center flex bg-[#0250FC]'>
                    <div className='w-[80%] mx-auto flex  justify-between h-[15%] items-center flex'>
                        <HiOutlineArrowLeft onClick={() => naviagte(-1)} />
                        <div className='tracking-[4px] fonts-mid'>GROUP A</div>
                        <div></div>
                    </div>
                </div>
                <div className='text-black'>
                    <div>Vote for the candidate of your choice</div>
                </div>
            </div>
        </div>
    )
}

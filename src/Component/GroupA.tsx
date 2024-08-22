import { useState, useEffect } from 'react';
import { ModalSummary } from './ModalSummary';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { useNavigate } from 'react-router';

export const GroupA = () => {
    const [voted, setVoted] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()
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
            name: "Michael Johnson"
        },
    ];

    console.log('election on a  rdytdytcdyutdcutydutyy*******************')
    
    useEffect(() => {
        const storedVote = localStorage.getItem('GroupAId');
        if (storedVote) {
            // setVoted(Number(storedVote));
            setShowModal(true);
        }
    }, []);

    console.log(voted)
    const handleVote = (id: number) => {
        setVoted(id);
    };

    const handleSaveToNet = () => {
        if (voted !== null) {
            localStorage.setItem('GroupAId', voted.toString());
            setShowModal(true);
        }
        console.log(voted)
    };

    return (
        <div className='xl:h-full z-50  w-full relative  flex flex-col xl:gap-[4.6rem]   gap-[5vw]  xl:items-center xl:justify-evenly group_cont'>
            <div className='xl:pt-[5.5vw] flex flex-col xl:items-center xl:gap-[4rem] gap-[2rem] md:gap-[3rem]'>
                <div className='flex xl:hidden z-50 text-white justify-between min-h-[25vw] md:min-h-[20vw] w-full items-center flex bg-[#0250FC]'>
                    <div className='w-[80%]  mx-auto flex  justify-between h-[15%]  items-center flex'>
                        <HiOutlineArrowLeft onClick={() => navigate(-1)} className='text-[6.4vw]' />
                        <div className='tracking-[4px] text-[4.1vw] fonts-mid'>GROUP A</div>
                        <div></div>
                    </div>
                </div>
                <div className='text-[#171717] fonts-mid relative tracking-[0.2px] text-[2vw] xl:block hidden'>Below are the candidates  for the “Administrative Roles” category</div>
                <div className='xl:hidden my-[0vw] md:my-[0vw] text-[4.5vw] text-center  tracking-[1px]'>Vote for the candidate of your choice</div>
                <div className='flex xl:flex-row xl:px-0 px-10 md:px-20 flex-col xl:gap-[3vw] gap-[7vw] xl:items-center  justify-center'>
                    {imgArray.map((img) => (
                        <div key={img.id} className='flex xl:flex-col gap-[10vw] xl:gap-2'>
                            <div>
                                <img src={img.src} alt={img.alt} className='xl:w-[21vw] w-[30vw] h-[25vw] rounded-[3vw] xl:h-[21vw] xl:rounded-[0.8vw]' />
                            </div>
                            <div className='flex flex-col items-center justify-center xl:gap-2'>
                                <div className='text-center fonts-mid md:text-[3.6vw] xl:text-[1.3vw] font-medium'>{img.name}</div>
                                <button
                                    className={`text-white  xl:w-[60%] w-[31vw] md:w-[29vw]  xl:text-[1.25vw]  text-[4vw] mx-auto xl:h-[3vw] md:h-[8vw] h-[9vw] rounded-[4px] md:rounded-[4px] fonts-mid xl:rounded-[4px] mt-3 
                                        ${voted === img.id ? "bg-[#209254]" : "bg-[#828282]"}`}
                                    onClick={() => handleVote(img.id)}
                                >
                                    {voted === img.id ? 'Voted' : "Vote"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-[80%]  mx-auto xl:mt-0 mb-0 md:mb-[4vw] my-[0vw]   xl:h-0 h-full flex items-center relative xl:-top-[1vw] justify-center'>
                <button
                    className={`text-white  xl:w-[44%] w-full h-[7.5vh] md:h-[13.2vw] xl:text-[1.5vw] text-[4vw] mx-auto xl:h-[3.5vw] fonts-mid rounded-[6px] md:rounded-[10px] xl:rounded-[4px] mt-0 ${voted === null ? "bg-black bg-opacity-50 cursor-not-allowed" : "bg-[#0250FC]"}`}
                    onClick={handleSaveToNet}
                    disabled={voted === null}
                >
                    Save Vote
                </button>
            </div>
            {showModal && (
                <div className='h-full w-full  z-40 inset-0 bg-[#171717] opacity-90 absolute flex items-center justify-center'>
                    <ModalSummary />
                </div>
            )}
            <div className='flex items-center  relative justify-center'>
                <div className="h-[1vw]  mx-[1.5vw] md:hidden block w-[40%] line_sufs  absolute -top-2 md:-top-10 mx-auto rounded-[4px] bg-black">
                </div>
            </div>
        </div>
    );
};

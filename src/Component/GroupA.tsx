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

    useEffect(() => {
        const storedVote = localStorage.getItem('GroupAId');
        if (storedVote) {
            // setVoted(Number(storedVote));
            setShowModal(true);
        }
    }, []);

    const handleVote = (id: number) => {
        setVoted(id);
    };

    const handleSaveToNet = () => {
        if (voted !== null) {
            localStorage.setItem('GroupAId', voted.toString());
            setShowModal(true);
        }
    };

    return (
        <div className='h-full w-full relative flex flex-col  xl:items-center xl:justify-evenly'>
            <div className='flex xl:hidden z-50 text-white justify-between min-h-[15%] w-full items-center flex bg-[#0250FC]'>
                <div className='w-[80%]  mx-auto flex  justify-between h-[15%] items-center flex'>
                    <HiOutlineArrowLeft onClick={() => navigate(-1)} className='text-[6.4vw]' />
                    <div className='tracking-[4px] text-[4.1vw] fonts-mid'>GROUP A</div>
                    <div></div>
                </div>
            </div>
            <div className='text-[#171717] fonts-mid tracking-[0.2px] xl:block hidden'>Below are the candidates for the “Administrative Roles” category</div>
            <div className='xl:hidden my-[6vw] md:my-[0vw] text-[4.5vw] text-center  tracking-[1px]'>Vote for the candidate of your choice</div>
            <div className='flex xl:flex-row px-0 px-10 flex-col xl:gap-[3vw] gap-[7vw] xl:items-center  justify-center'>
                {imgArray.map((img) => (
                    <div key={img.id} className='flex xl:flex-col gap-[10vw] xl:gap-2'>
                        <div>
                            <img src={img.src} alt={img.alt} className='xl:w-[21vw] w-[30vw] h-[25vw] rounded-[3vw] xl:h-[17vw] xl:rounded-[0.8vw]' />
                        </div>
                        <div className='flex flex-col items-center justify-center xl:gap-2'>
                            <div className='text-center fonts-mid md:text-[3.5vw] s font-medium'>{img.name}</div>
                            <button
                                className={`text-white  xl:w-[60%] w-[30vw] mx-auto xl:h-[3vw] md:h-[7vw] h-[10vw] fonts-mid rounded-[4px] mt-3 ${voted === img.id ? "bg-[#209254]" : "bg-[#828282]"}`}
                                onClick={() => handleVote(img.id)}
                            >
                                {voted === img.id ? 'Voted' : "Vote"}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='w-[89%] mx-auto  xl:h-0 h-full flex items-center relative xl:-top-[1vw] justify-center'>
                <button
                    className={`text-white  xl:w-[22%] w-full h-[15vw]  mx-auto xl:h-[3.5vw] fonts-mid rounded-[4px] mt-0 ${voted === null ? "bg-black bg-opacity-50 cursor-not-allowed" : "bg-[#0250FC]"}`}
                    onClick={handleSaveToNet}
                    disabled={voted === null}
                >
                    Save Vote
                </button>
            </div>
            {showModal && (
                <div className='h-full w-full z-40 inset-0 bg-[#171717] opacity-90 absolute flex items-center justify-center'>
                    <ModalSummary />
                </div>
            )}
            <div className="h-[3vw] xl:hidden block w-[40%] relative -top-2 mx-auto rounded-[4px] bg-black">
                <div></div>
            </div>
        </div>
    );
};

import React, { useState } from 'react'
import { ModalSummary } from './ModalSummary';

export const GroupC = () => {
    const [voted, setVoted] = useState<number | null>(null); // To store the ID of the voted image
    const [showModal, setShowModal] = useState(false);

    const imgArray = [
        {
            src: '/asset/Images/voter7.png',
            alt: 'Image 1',
            id: 1
        },
        {
            src: '/asset/Images/voter8.png',
            alt: 'Image 2',
            id: 2
        },
        {
            src: '/asset/Images/voter9.png',
            alt: 'Image 3',
            id: 3
        },
    ];

    const handleVote = (id: number) => {
        setVoted(id);
    };

    const handleSaveToNet = () => {
        if (voted !== null) {
            setShowModal(true);
        }
    };

    return (
        <div className='h-full w-full relative flex flex-col items-center justify-center'>
            <div className='flex gap-2'>
                {imgArray.map((img) => (
                    <div key={img.id}>
                        <div>
                            <img src={img.src} alt={img.alt} className='w-[14vw] h-[14vw]' />
                        </div>
                        <button
                            className={`text-white w-full mt-3 ${voted === img.id ? "bg-red-500" : "bg-black"}`}
                            onClick={() => handleVote(img.id)}
                        >
                            Vote
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <button
                    className={`bg-[#828282] mt-6 md:text-[3.5vw] rounded-[6px] xl:text-[1vw] text-white uppercase relative top-8 xl:top-0 tracking-[1px] font-medium h-[3.3rem] md:h-[11.3vw] xl:h-[2.4rem] w-full xl:py-[0.9vw] px-[1.2vw] ${voted === null ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={handleSaveToNet}
                    disabled={voted === null}
                >
                    Save to net
                </button>
            </div>
            {showModal && (
                <div className='h-full w-full inset-0 bg-black opacity-60 absolute flex items-center justify-center'>
                    {/* Modal content goes here */}
                    <ModalSummary onClose={() => setShowModal(false)} />
                </div>
            )}
        </div>
    );
}

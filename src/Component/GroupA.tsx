import { useEffect, useState } from "react";
import { ModalSummary } from "./ModalSummary";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { FeedbackError } from "./utils/FeedbackError";

export const GroupA = () => {

    const token = localStorage.getItem("token");

    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [voted, setVoted] = useState<number | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [payload, setPayload] = useState({});
    const [isloading, setIsLoading] = useState(false);
    const [isTextloading, setIsTextLoading] = useState(false);
    const navigate = useNavigate();
    console.log(payload);
    const [election, setElection] = useState<any>([]);
    console.log(election)
    useEffect(() => {
        const handleEletion = async () => {
            setIsLoading(true)
            try {
                const res = await fetch(`https://foursquarevgc-election-api.onrender.com/elections`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`
                    }
                })
                const result = await res.json();
                setElection(result);
            } catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        handleEletion();
    }, [1])


    const newArray = [];
    newArray.push(election);
    console.log(newArray);
    const electionData: any = newArray[0];
    console.log(electionData?.[0]?.groups[0].candidates);
    const electionId = electionData?.[0]?._id;
    console.log(electionId);
    const group = electionData?.[0]?.groups[0];
    const groupId = electionData?.[0]?.groups[0]?._id;
    console.log(groupId);
    localStorage.setItem('electionId',electionId)

    const candidates = group?.candidates;
    const candidateId =
        candidates && candidates.length > 0 ? candidates[0]._id : " ";
    candidates?.forEach((candidate: any) => {
        console.log("Candidate:", candidate);
    });
    console.log("candidTEID", candidateId)

    const callSaveVoteApi = async (updatedPayload: any) => {
        setIsTextLoading(true)
        try {
            const res = await fetch(
                `https://foursquarevgc-election-api.onrender.com/election-records/vote/${electionId}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(updatedPayload),
                }
            );
            if (res.ok) {
                setShowModal(true);
            } else {
                const errorResult = await res.json();
                setErrorMessage(errorResult.vote || "Please try again later.");
                setShowErrorModal(true);
            }
        } catch (error: any) {
            setErrorMessage(
                error.message || "We cannot save your vote at the moment."
            );
            setShowErrorModal(true);
        }
        finally {
            setIsTextLoading(false)
        }

    };

    const handleVote = (candidateId: number) => {
        setVoted(candidateId);
    };

    const handleSaveVote = async () => {
        setIsTextLoading(true)
        try {
            if (voted !== null) {
                localStorage.setItem("GroupAId", voted.toString());

                setPayload((prevPayload) => {
                    const updatedPayload = {
                        ...prevPayload,
                        groupId: groupId,
                        candidateId: candidateId,
                    };

                    callSaveVoteApi(updatedPayload);

                    return updatedPayload;
                });

                console.log(voted);
            }
        } catch (error) {
            error
        }
        finally {
            setIsTextLoading(false);
        }
    };


    return (
        <div className="xl:h-full z-50 w-full relative flex flex-col xl:gap-[4.6rem] gap-[5vw] xl:items-center xl:justify-evenly group_cont">
            <div className="xl:pt-[5.5vw] flex flex-col xl:items-center xl:gap-[4.8rem] gap-[2rem] md:gap-[3rem]">
                <div className="flex xl:hidden z-50 text-white justify-between min-h-[25vw] md:min-h-[20vw] w-full items-center flex bg-[#0250FC]">
                    <div className="w-[80%] mx-auto flex justify-between h-[15%] items-center flex">
                        <HiOutlineArrowLeft
                            onClick={() => navigate("/votes")}
                            className="text-[6.4vw]"
                        />
                        <div className="tracking-[4px] text-[4.1vw] fonts-mid">Category A</div>
                        <div></div>
                    </div>
                </div>
                <div className="text-[#171717] fonts-mid tracking-[0.2px] xl:block hidden">
                    Below are the candidates for the “Administrative Roles” category
                </div>
                <div className="xl:hidden my-[0vw] md:my-[0vw] text-[4.5vw] text-center tracking-[1px]">
                    Below are the candidates for the “Administrative Roles” category
                </div>
                <div className="flex xl:flex-row xl:px-0 px-0 md:px-0 flex-col xl:gap-[3vw] gap-[7vw] xl:items-center justify-center">
                    {!isloading ? (
                        <div className="flex xl:flex-row xl:px-0 px-10 md:px-20 flex-col xl:gap-[3vw] gap-[7vw] xl:items-center justify-center">
                            {candidates?.map((candidate: any) => (
                                <div key={candidate._id} className="flex xl:flex-col gap-[10vw] xl:gap-2">
                                    <div>
                                        <img
                                            // src="/asset/Images/vecimg.png"
                                            src={candidate.image}
                                            alt={candidate.name}
                                            className="xl:w-[21vw] w-[30vw] object-cover h-[25vw] rounded-[3vw] xl:h-[21vw] xl:rounded-[0.8vw]"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center justify-center xl:gap-2">
                                        <div className="text-center fonts-mid md:text-[3.6vw] xl:text-[1.3vw] font-medium">
                                            {candidate.name}
                                        </div>
                                        <button
                                            className={`text-white xl:w-[60%] w-[31vw] md:w-[29vw] xl:text-[1.25vw] text-[4vw] mx-auto xl:h-[3.5vw] md:h-[8vw] h-[9vw] rounded-[4px] md:rounded-[4px] xl:rounded-[4px] mt-3 ${voted === candidate._id ? "bg-[#209254]" : "bg-[#828282]"}`}
                                            onClick={() => handleVote(candidate._id)}
                                        >
                                            {voted === candidate._id ? "Voted" : "Vote"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex xl:flex-row  xl:px-0 px-10 md:px-20 flex-col xl:gap-[3vw] gap-[7vw] xl:items-center justify-center">
                            {[...Array(3)].map((_, index) => (
                                <div key={index} className="flex xl:flex-col items-center justify-center gap-[10vw] xl:gap-2">
                                    <div className="skeleton-img xl:w-[21vw] w-[33vw] h-[25vw] rounded-[3vw] xl:h-[21vw] xl:rounded-[0.8vw]"></div>
                                    <div className="flex flex-col items-center">
                                        <div className="skeleton-text xl:w-[21vw]  w-[30vw] h-[1vw] mt-2"></div>
                                        <div className="skeleton-button xl:w-[60%] text-center w-[31vw] h-[8vw] xl:h-[3vw] mt-3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
            <div className='w-[80%]  mx-auto xl:mt-0 mb-0 md:mb-[4vw] my-[0vw]   xl:h-0 h-full flex items-center relative xl:-top-[1vw] justify-center'>
              
                        <button
                            className={`text-white  xl:w-[44%] w-full h-[6.5vh] md:h-[13.2vw] xl:text-[1.5vw] text-[4vw] mx-auto xl:h-[3.5vw] fonts-mid rounded-[6px] md:rounded-[10px] xl:rounded-[4px] mt-0 ${voted === null ? "bg-black bg-opacity-50 cursor-not-allowed" : "bg-[#0250FC]"}`}
                            onClick={handleSaveVote}
                            disabled={voted === null}
                        >
                            {isTextloading ? "Saving..." : "Save vote"}
                        </button>
             
            </div>
            {showModal && (
                <div className="h-full w-full z-40 inset-0 bg-[#171717] opacity-90 absolute flex items-center justify-center">
                    <ModalSummary />
                </div>
            )}
            {showErrorModal && (
                <FeedbackError
                    message={errorMessage}
                    onClose={() => setShowErrorModal(false)}
                />
            )}
            <div className="flex items-center relative justify-center">
                <div className="h-[1vw] mx-[1.5vw] xl:hidden block w-[40%] absolute -top-2 md:-top-10 mx-auto rounded-[4px] bg-black"></div>
            </div>
        </div>
    );
};

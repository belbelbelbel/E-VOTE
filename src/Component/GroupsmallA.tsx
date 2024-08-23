import { HiOutlineArrowLeft } from "react-icons/hi2";
import { useNavigate } from 'react-router';
export const GroupsmallA = () => {
    const naviagte = useNavigate()
  
    return (
      <div className="w-screen h-screen">
        <div className="w-full h-full">
          <div className="flex  text-white justify-between h-[15%] items-center flex bg-[#0250FC]">
            <div className="w-[80%] mx-auto flex  justify-between h-[15%] items-center flex">
              <HiOutlineArrowLeft onClick={() => naviagte(-1)} />
              <div className="tracking-[4px] fonts-mid">Category A</div>
              <div></div>
            </div>
          </div>
          <div className="text-black">
            <div>Vote for the candidate of your choice</div>
          </div>
        </div>
      </div>
    );
}

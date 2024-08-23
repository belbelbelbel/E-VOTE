import { getDateTime } from "./utils/GetTimeAndDate";
interface iTimeProps {
  start_time: any;
  stop_time: any;
}
export const ElectionOnHold = ({ start_time, stop_time }: iTimeProps) => {
  const { formattedDate, formattedTime } = getDateTime(start_time);
  const { formattedDate: formattedStopDate, formattedTime: formattedStopTime } =
    getDateTime(stop_time);
  const handleLogout = () => {
    const keysToRemove = [
      "username",
      "GroupAId",
      "GroupBId",
      "GroupCId",
      "token",
    ];
    keysToRemove.forEach((key) => localStorage.removeItem(key));
    window.location.href = "/";
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black  bg-opacity-70 xl:bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md relative flex-col  mx-auto justify-center items-center flex h-[40vh] w-[90%] xl:w-[60%] xl:h-[55vh] text-center">
        <div className=" flex flex-col items-center xl:gap-3 gap-[3.5vw]">
          <h1 className="text-red-500 xl:text-[43px] text-[5.5vw] md:text-[5vw] fonts-mid tracking-[1px] xl:tracking-[2px] font-black flex gap-2">
            {" "}
            Election Not Started Yet
          </h1>
          <div className="xl:text-[31px] text-[3.8vw] md:text-[5vw] text-blue-800 fonts-mid">
            Voting Schedule:
          </div>
          <div className="xl:text-[21px] text-[3.8vw] md:text-[5vw]">
            Date: <strong>{formattedDate}</strong>
          </div>
          <div className="xl:text-[21px] text-[3.8vw] md:text-[5vw]">
            Time: <strong>{formattedTime}</strong>.
          </div>
          <div className="xl:text-[21px] text-[4vw] md:text-[5vw]">
            Closing: <strong>{formattedStopTime}</strong> on{" "}
            <strong>{formattedStopDate}</strong>.
          </div>
        </div>
        <h1 className="text-gray-700 mb-6"></h1>
        <button
          className=" text-blue-800 fonts-mid px-8 py-2 w-[70%] md:h-[7vh] text-[6vw] absolute xl:left-0  bottom-3 xl:text-[2vw] xl:w-[40%] rounded "
          onClick={handleLogout}
        >
          Log Out
        </button>
        {/* <div className="relative w-full">
          <CountdownTimer />
        </div> */}
      </div>
    </div>
  );
};

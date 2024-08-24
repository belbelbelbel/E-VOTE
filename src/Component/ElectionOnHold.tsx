import { handleLogout } from "../utils";
interface iTimeProps {
  start_time: string | number | Date;
  stop_time: string | number | Date;
}

export const ElectionOnHold = ({ start_time, stop_time }: iTimeProps) => {

  const start: Date = new Date(start_time);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  const formattedStartDate = start.toLocaleString(undefined, options);
  console.log(`Start Date/Time: ${formattedStartDate}`);

  const stop: Date = new Date(stop_time);
  const formattedStopDate = stop.toLocaleString(undefined, options);
  console.log(`Stop Date/Time: ${formattedStopDate}`);

  return (
    <div className="fixed inset-0 z-50 flex items-center  justify-center bg-black  bg-opacity-70 xl:bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md relative flex-col  mx-auto justify-center items-center flex h-[40vh] w-[90%] xl:w-[60%] xl:h-[55vh] text-center">
        <div className=" flex flex-col items-center xl:gap-3  gap-[2.3vw]">
          <h1 className="text-red-500 xl:text-[43px] text-[5.5vw] md:text-[5vw] fonts-mid tracking-[1px] xl:tracking-[2px] font-black flex gap-2">
            {" "}
            Election Not Started Yet
          </h1>
          <div className="xl:text-[31px] text-[3.8vw] md:text-[5vw] text-blue-800 fonts-mid">
            Voting Schedule:
          </div>
          <div className="xl:text-[21px] md:text-[2rem] text-[3.8vw] md:text-[5vw]">
            <strong> Start Date/Time: </strong>
            {formattedStartDate}
          </div>
          <div className="xl:text-[21px] md:text-[2rem]  text-[3.8vw] md:text-[5vw]">
            <strong>Stop Date/Time:</strong> {formattedStopDate}
          </div>
        </div>
        <h1 className="text-gray-700 mb-6"></h1>
        <button
          className=" text-white fonts-mid px-8 py-2 w-[70%] md:h-[7vh] xl:text-[6vw] text-[4vw] absolute xl:bottom-5 bg-red-600 uppercase   bottom-3 xl:text-[2vw] xl:w-[40%] rounded "
          onClick={handleLogout}
        >
          Logout
        </button>
        {/* <div className="relative w-full">
          <CountdownTimer />
        </div> */}
      </div>
    </div>
  );
};

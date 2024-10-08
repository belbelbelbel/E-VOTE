export const ModalSummary = () => {
  return (
    <div className="w-screen  text-white flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col gap-3">
        <div>
          <img
            src="/asset/Images/modalsuccessimage.png"
            alt="suceesIMAGE"
            className="xl:w-[20vw] md:w-[45vw] w-[45vw]"
          />
        </div>
        <div className="text-center xl:text-[1.5vw] text-[4vw] fonts-mid">
          <div>Successfully saved!</div>
          <div>Your vote for this candidate has been collected </div>
        </div>
      </div>

      {}
    </div>
  );
};

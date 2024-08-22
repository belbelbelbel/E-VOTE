import Countdown from 'react-countdown';

const CountdownTimer = () => {

  const now = new Date();
  let targetTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0);

  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  return (
   <div className='text-red-500 text-[2.5vw] fonts-mid font-extrabold absolute right-0'>
     <Countdown date={targetTime} />
   </div>
  );
};

export default CountdownTimer;
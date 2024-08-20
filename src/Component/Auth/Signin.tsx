import "../Styles/Entire.css";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { MdOutlineHowToVote } from "react-icons/md";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";

export const Signin = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });
  const isFormFilled = formState.username !== "" && formState.password !== "";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formState.username === "" || formState.password === "") {
      return 0;
    }
    else {
      navigate("/votes",{state:{username: formState.username}});
    }
  }
  const [] = useState()
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  localStorage.setItem('username',formState.username)

  return (
    <div className="text-black w-screen py-[1rem] xl:py-0 h-screen xl:flex-row flex-col flex">
      <div className="h-screen hidden xl:flex pt-[3.6rem] gap-[0vw] w-[49%] items-center gap-[4.6vw] flex-col flex signup-background">
        <div className="text-[#7D7D7D] w-[58%] text-center mx-auto tracking-[1.6px] font-extrabold leading-[3.3vw] uppercase text-[2.4vw]">
          Foursquare vgc online voting platform
        </div>
        <div className="">
          <img
            loading="lazy"
            src="/asset/Images/signupimage.svg"
            alt="signupimage"
            className="w-[38vw]"
          />
        </div>
      </div>
      <div className="xl:w-[51%] w-screen h-[95dvh] mx-auto xl:pt-[5rem] flex flex-col items-center justify-center">
        <div className="flex flex-col xl:w-[60%] w-[83%] h-full justify-center xl:justify-start xl:gap-[11.4vw] mx-auto">
          <div className="items-center flex justify-center">
            <img
              loading="lazy"
              src="/asset/Images/weblogo.png"
              alt="weblogo"
              className="xl:w-[14vw] w-[50vw] w-[44vw] relative -top-[37vw] md:-top-[15vw] xl:top-0 xl:relative"
            />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-[2vw] xl:gap-[1.1vw]">
            <div className="">
              <div className="xl:text-[1vw] text-[3.8vw] md:text-[3.6vw] text-[#828282]">
                Hello
              </div>
              <div className="flex fonts-text items-center xl:text-[1.1vw] md:text-[3.5vw] text-[3.8vw] gap-[1vw] uppercase">
                <div>Login to cast your vote!</div>
                <div>
                  <MdOutlineHowToVote className="text-[5vw] md:text-[4vw] xl:text-[1.7vw]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[4.8vw] md:gap-[6vw] xl:gap-[1.5vw]">
              <div className="flex items-center md:gap-[18px] gap-[10px] xl:gap-[10px] bg-[#F2F2F2] rounded-[8px] md:px-8 xl:px-4 px-4 xl:py-[0.9vw] h-[3.4rem] md:h-[12.3vw] md:rounded-[6px] xl:text-[1.1vw] md:text-[4vw] xl:h-[3.4rem] w-full">
                <IoPerson className="text-[#BDBDBD] xl:text-[1.5vw] md:text-[5vw] text-[6vw]" />
                <input
                  type="text"
                  name="username"
                  value={formState.username}
                  onChange={handleChange}
                  required
                  placeholder="Username"
                  className="bg-transparent w-[90%] outline-none border-none"
                />
              </div>
              <div className="flex items-center xl:gap-[10px] md:gap-[18px] gap-[10px] bg-[#F2F2F2] justify-between rounded-[8px] md:px-8 xl:px-4 px-4 xl:py-[0.9vw] md:h-[12.3vw] xl:text-[1.1vw] md:rounded-[6px] md:text-[4vw] h-[3.4rem] xl:h-[3.4rem] w-full">
                <FaLock className="text-[#BDBDBD] xl:text-[1.2vw] md:text-[4vw] text-[5.4vw]" />
                <input
                  type="text"
                  name="password"
                  inputMode="numeric"
                  value={formState.password}
                  onChange={handleChange}
                  required
                  placeholder="Pin"
                  className="bg-transparent w-[90%] outline-none border-none"
                />
                <div onClick={() => setShowPassword(!showPassword)} aria-label="Toggle password visibility ">
                  {showPassword ? (
                    <IoIosEye className="text-black text-opacity-50  xl:text-[1.9vw] md:text-[6vw]  text-[7vw]" />
                  ) : (
                    <IoIosEyeOff className="text-black text-opacity-50   xl:text-[1.9vw] md:text-[6vw]  text-[7vw]" />
                  )}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className={`bg-[#0250FC] md:text-[3.5vw] rounded-[8px] xl:text-[1.1vw] text-white uppercase relative top-8 xl:top-0 rounded-[3px] md:rounded-[6px] tracking-[1px] font-medium h-[3.3rem] md:h-[11.3vw] xl:h-[3.4rem] w-full xl:py-[0.9vw] ${!isFormFilled && "bg-[#0250FC] bg-opacity-70"
                    }`}
                  disabled={!isFormFilled}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-[1vw] xl:hidden block w-[40%] mx-auto rounded-[4px] bg-black">
        <div></div>
      </div>
    </div>
  );
};

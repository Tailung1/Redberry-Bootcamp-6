import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo2 from "./assets/logo2.png";
import redBerryIMG from "./assets/redberyIMG.png";

import "./App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(
      "bg-cover",
      "bg-center",
      "m-0",
      "h-screen"
    );
    document.body.style.backgroundImage = `url(${redBerryIMG})`;

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <>
      <div className='px-[70px]'>
        <img
          className='my-[25px]'
          src='./logo.png'
          alt='redberry logo'
        />
        <hr className='bg-[#1A1A1A] h-[1px] border-none' />
      </div>
      <div className='h-[100vh] flex flex-col  justify-center items-center'>
        <button
          onClick={() => navigate("/personal")}
          className='bg-[#1A1A1A] z-10  rounded-[8px] font-[20px] leading-normal text-[20px] text-white px-[120px] py-[14px]'
        >
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </button>
      </div>
      <img
        className='absolute top-[47%] right-[27%]'
        src={logo2}
        alt=''
      />
    </>
  );
}

export default App;

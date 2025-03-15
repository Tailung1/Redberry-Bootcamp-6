import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    document.body.classList.add(
      "bg-cover",
      "bg-center",
      "m-0",
      "h-screen"
    );
    document.body.style.backgroundImage = "url('/redberyIMG.png')";

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
        <button className='bg-[#1A1A1A] rounded-[8px] font-[20px] leading-normal text-[20px] text-white px-[120px] py-[14px]'>
          ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ
        </button>
      </div>
      <img
        className='absolute top-[47%] right-[27%]'
        src='/logo2.png'
        alt=''
      />
    </>
  );
}

export default App;

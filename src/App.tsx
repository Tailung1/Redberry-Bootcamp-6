import { useEffect, useState } from "react";

import "./App.css";

function App() {
 useEffect(() => {
   document.body.style.backgroundImage = "url('/redberyIMG.png')";
   document.body.style.backgroundSize = "cover";
   document.body.style.backgroundPosition = "center";
   document.body.style.margin = "0"; 
   document.body.style.height = "100vh";

   return () => {
     document.body.style.backgroundImage = "";
   };
 }, []);

  return (
    <div className='relative '>
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
    </div>
  );
}

export default App;

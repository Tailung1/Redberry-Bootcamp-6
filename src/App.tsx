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
    <div>
      <div className='px-[70px]'>
        <img className="my-[25px]" src='./logo.png' alt='redberry logo' />
        <hr className='bg-[#1A1A1A] h-[1px] border-none' />
      </div>
      <div className="h-[100vh] flex flex-col  justify-center items-center">
        <button>Click</button>
        <img src="/logo2.png" alt="" />
      </div>
    </div>
  );
}

export default App;

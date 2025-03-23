import React, { useState, useRef, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import check from "../assets/check.svg";
import warning from "../assets/warning.svg";
import { useForm } from "react-hook-form";

export default function Cv() {
  const navigate = useNavigate();
  const storedPersonalData = localStorage.getItem("formData");
  const fdp = storedPersonalData
    ? JSON.parse(storedPersonalData)
    : {};

  const storedExperinceData = localStorage.getItem(
    "formDataExperince"
  );
  const fde = storedExperinceData
    ? JSON.parse(storedExperinceData)
    : {};

  const storedEducation = localStorage.getItem("formDataEducation");
  const fded = storedEducation ? JSON.parse(storedEducation) : {};

  const storedImage = localStorage.getItem("image");
  const [show,setShow]=useState<boolean>(true)
  return (
    <div className='flex items-start ml-[40px] mt-[54px]  mb-[129px]'>
      <img
      className="cursor-pointer"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
        src={arrowIMG}
        alt='arrow icon'
        
      />
      <div className='flex flex-col gap-[25px] border-[0.8px] ml-[24%]  px-[55px] pb-[40px] pt-[40px] border-[#000]'>
        <div className='flex items-center gap-[85px]'>
          <div className='flex flex-col gap-[15px]'>
            {" "}
            <div className='flex gap-[10px] text-red-500 text-[30px]'>
              <h2>{fdp?.name}</h2>
              <h2>{fdp?.lastname}</h2>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <div className='flex gap-[10px]'>
                <img src={atIMG} alt='' />
                <p>{fdp.email}</p>
              </div>
              <div className='flex gap-[10px]'>
                <img src={phoneIMG} alt='' />
                <p>{fdp.number}</p>
              </div>
            </div>
            {fdp.optional && (
              <div className='break-words w-[200px]'>
                {" "}
                <h3 className='text-red-600 text-[20px]'>
                  About me
                </h3>{" "}
                <p>{fdp.optional}</p>{" "}
              </div>
            )}
          </div>
          <div>
            {storedImage && (
              <img
                className='w-[200px] h-[190px] rounded-[50%]'
                src={storedImage}
              />
            )}
          </div>
        </div>
        <hr />

        {/*Experince*/}
        {/*Experince*/}
        {/*Experince*/}

        <div className='flex flex-col gap-[15px]'>
          <h2 className='text-red-500 text-[30px]'>Experince</h2>
          <div className='flex flex-col '>
            <div className='flex gap-[5px] text-[1A1A1A]'>
              <p>{fde.position},</p>
              <p>{fde.employer}</p>
            </div>
            <div className='flex gap-[5px] text-[#909090]'>
              <p>{fde.startDate}</p>
              <span>-</span>
              <p>{fde.endDate}</p>
            </div>
          </div>
          <p className='break-words w-[200px]'>{fde.description}</p>
        </div>
        <hr />

        {/*Education*/}
        {/*Education*/}
        {/*Education*/}

        <div className='flex flex-col gap-[15px]'>
          <h2 className='text-red-500  text-[20px]'>Education</h2>
          <div className='h-[40px]'>
            <div className='flex gap-[10px]'>
              <p className='text-[#1A1A1A]'>
                {fded.uni}
                {fded.uni && fded.degreeRegist && ","}
              </p>
              <p className='text-[#1A1A1A]'>{fded.degreeRegist}</p>
            </div>
            <span className='text-[#909090]'>{fded.endDate}</span>
          </div>
          <p className='h-[40px] break-words w-[200px]'>
            {fded.description}
          </p>
        </div>
        <img
          className='w-10 h-10 mt-[150px]'
          src={starIMG}
          alt='star icon'
        />
      </div>
      {show && (
        <div className={`bg-[#38cdeb] ${!show?"hidden":""} break-words w-[350px] relative pl-[30px] pr-[30px] py-[30px] leading-[43px] text-[28px] ml-[30px] shadow-[0_0_15px_5px_rgba(0,0,0,0.3)]`}>
          <p>CV successfully sent 🎉</p>
          <span
            onClick={() => setShow(false)}
            className='absolute top-0 cursor-pointer text-red-600 right-[10px]'
          >
            x
          </span>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import check from "../assets/check.svg";
import warning from "../assets/warning.svg";
import calendar from "../assets/calendar.svg"
import IMask from "imask"; // Import IMask

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Experince() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex gap-[60px] py-[48px] pl-[48px] pr-[70px]   bg-[#F9F9F9] mt-48px  mb-[65px] w-1/2'>
        <div>
          <img
            onClick={() => navigate("/personal")}
            className='cursor-pointer'
            src={arrowIMG}
            alt='arrow image'
          />
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex flex-col gap-[12px] '>
            <div className='flex justify-between'>
              <h2>Experince</h2>
              <p>2/3</p>
            </div>
            <hr className='bg-[#1A1A1A] h-[1px]' />
          </div>
          {/* Inputs Section */}
          <div className='mt-[70px] flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[5px]'>
              <h3>თანამდებობა</h3>
              <input
                type='text'
                placeholder='developer'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
              />
              <p>min 2 letters</p>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <h3>damsaqmebeli</h3>
              <input
                type='text'
                placeholder='damsaqmebeli'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
              />
              <p>min 2 letters</p>
            </div>
            <div className='flex gap-[25px] w-full '>
              <div className='flex flex-col relative gap-[5px] w-full'>
                <h3>თანამდებობა</h3>
                <input
                  type='text'
                  placeholder='developer'
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                />
                <img src={calendar} className="absolute right-2 top-9"  alt="calencar icon" />
                <p>min 2 letters</p>
              </div>
              <div className='flex flex-col gap-[5px] w-full'>
                <h3>თანამდებობა</h3>
                <input
                  type='text'
                  placeholder='developer'
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                />
                <p>min 2 letters</p>
              </div>
            </div>
            <div className=' flex  flex-col gap-[5px] w-full'>
              <p>Description</p>
              <textarea
                placeholder='Description'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] pt-[6px] pb-[40px] font-[16px] border rounded-[4px] w-full'
              />
            </div>
          </div>
          <hr className='bg-[#1A1A1A] h-[1.2px] mt-[50px]' />
        </div>
      </div>

      <div></div>
    </div>
  );
}

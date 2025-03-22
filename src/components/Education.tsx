import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import check from "../assets/check.svg";
import warning from "../assets/warning.svg";
import { useForm } from "react-hook-form";
export default function Education() {
  const [endDate, setEndDate] = useState("");
  const endDateRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => endDateRef.current?.showPicker();
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue("endDate", e.target.value);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const WendDate = watch("endDate");

  return (
    <div>
      <div className='bg-[#F9F9F9] flex gap-[20px] w-1/2 py-[20px] px-[50px]'>
        <div>
          <img src={arrowIMG} alt='arrow icon' />
        </div>
        <div className='w-full flex flex-col gap-[7px]'>
          <div className='flex justify-between w-full'>
            <h2>Education</h2>
            <p>3/3</p>
          </div>
          <hr />
          <form className='flex flex-col gap-[35px] mt-[30px] w-full '>
            <div className='flex flex-col gap-[7px]'>
              <p>School/University</p>
              <input
                type='text'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
              />
              <p>Min.2 letters</p>
            </div>
            <div className='flex w-full gap-[40px]'>
              <div className='w-1/2 flex flex-col gap-[8px]'>
                <p>Degree</p>
                <input
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full'
                  type='text'
                />
              </div>

              <div className='w-1/2 flex flex-col gap-[8px] relative'>
                <p>End date</p>
                <input
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full'
                  type='text'
                  value={WendDate}
                  placeholder='mm / dd / yyyy'
                  readOnly
                />
                <input
                  {...register("endDate")}
                  className='hidden'
                  ref={endDateRef}
                  type='date'
                  onChange={handleDateChange}
                />
                <img
                  src={calendar}
                  className='absolute w-7 h-7 top-[50%] right-[5px] cursor-pointer'
                  alt='calendar icon'
                  onClick={handleDateClick}
                />
              </div>
            </div>
            <div className='flex flex-col gap-[8px]'>
              <p>Description</p>
              <input
                className="'focus:outline-none focus:ring-0 pl-[15px] pr-[30px] pb-[80px] pt-[6px] font-[16px] border rounded-[4px] w-full'"
                type='text'
              />
            </div>
            <hr className='bg-[#C1C1C1] h-[1.4px]' />
            <button className=' w-[280px] rounded-[4px] bg-[#62A1EB] text-[#fff] py-[15px]'>
              Add other School/University
            </button>
            <div className='flex justify-between mt-[100px]'>
              <button className='bg-[#6B40E3] rounded-[4px] text-white py-[10px] w-[100px]'>
                Back
              </button>
              <button className='bg-[#6B40E3] rounded-[4px] text-white py-[10px] w-[100px]'>
                Finish
              </button>
            </div>
          </form>
        </div>
      </div>

      <div></div>
    </div>
  );
}

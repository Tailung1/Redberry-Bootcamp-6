import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import arrowIMG from "../assets/arrow.svg";
import calendar from "../assets/calendar.svg";

export default function Experience() {
  const navigate = useNavigate();

  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  // Define the ref type as HTMLInputElement
  const firstDateRef = useRef<HTMLInputElement>(null);
  const secondDateRef = useRef<HTMLInputElement>(null);

  const handleFirstCalendarClick = () => {
    firstDateRef.current?.showPicker?.();
    firstDateRef.current?.click();
  };

  const handleSecondCalendarClick = () => {
    secondDateRef.current?.showPicker?.();
    secondDateRef.current?.click();
  };

  // Type the event as React.ChangeEvent<HTMLInputElement>
  const handleFirstDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstDate(e.target.value);
  };

  const handleSecondDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondDate(e.target.value);
  };

  return (
    <div>
      <div className='flex gap-[60px] py-[48px] pl-[48px] pr-[70px] bg-[#F9F9F9] mt-48px mb-[65px] w-1/2'>
        <div>
          <img
            onClick={() => navigate("/personal")}
            className='cursor-pointer'
            src={arrowIMG}
            alt='arrow image'
          />
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex flex-col gap-[12px]'>
            <div className='flex justify-between'>
              <h2>Experience</h2>
              <p>2/3</p>
            </div>
            <hr className='bg-[#1A1A1A] h-[1px]' />
          </div>
          <div className='mt-[70px] flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-[5px]'>
              <h3>Position</h3>
              <input
                type='text'
                placeholder='developer'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
              />
              <p>min 2 letters</p>
            </div>
            <div className='flex flex-col gap-[5px]'>
              <h3>Company</h3>
              <input
                type='text'
                placeholder='company'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
              />
              <p>min 2 letters</p>
            </div>
            <div className='flex gap-[25px] w-full'>
              {/* First Date */}
              <div className='flex flex-col relative gap-[5px] w-full'>
                <h3>Birthdate</h3>
                <input
                  type='text'
                  placeholder='Choose Date'
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                  value={firstDate}
                  readOnly
                />
                <img
                  src={calendar}
                  className='absolute right-2 top-9 cursor-pointer z-10'
                  alt='calendar icon'
                  onClick={handleFirstCalendarClick}
                />
                <input
                  type='date'
                  ref={firstDateRef}
                  style={{ display: "none" }}
                  onChange={handleFirstDateChange}
                />
                <p>Choose Date</p>
              </div>

              {/* Second Date */}
              <div className='flex flex-col relative gap-[5px] w-full'>
                <h3>Another Date</h3>
                <input
                  type='text'
                  placeholder='Choose Date'
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                  value={secondDate}
                  readOnly
                />
                <img
                  src={calendar}
                  className='absolute right-2 top-9 cursor-pointer z-10'
                  alt='calendar icon'
                  onClick={handleSecondCalendarClick}
                />
                <input
                  type='date'
                  ref={secondDateRef}
                  style={{ display: "none" }}
                  min={
                    firstDate
                      ? new Date(
                          new Date(firstDate).setDate(
                            new Date(firstDate).getDate() + 1
                          )
                        )
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={handleSecondDateChange}
                />
                <p>Choose Date</p>
              </div>
            </div>
            <div className='flex flex-col gap-[5px] w-full'>
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
    </div>
  );
}

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import calendar from "../assets/calendar.svg";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
// import IMask from "imask"; // Import IMask

interface imageType {
  image: string | null;
  counter:number
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export default function Experience({ image,setCounter,counter }: imageType) {
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

  // Get the personal data from localStorage and parse it as an object
  const storedData = localStorage.getItem("formData");
  const personalData = storedData ? JSON.parse(storedData) : {};

  return (
    <div className='flex'>
      <div className='flex gap-[60px] py-[48px] pl-[48px] pr-[70px] bg-[#F9F9F9] mt-48px mb-[65px] w-[54%]'>
        <div>
          <img
            onClick={() => {navigate("/personal"),setCounter(counter+1)}}
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
                <h3>Second Date</h3>
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
                          new Date(firstDate).getTime() +
                            24 * 60 * 60 * 1000
                        )
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  onChange={handleSecondDateChange}
                  disabled={!firstDate}
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

      {/* Summary Section */}
      <div className='bg-white flex '>
        <div className='flex items-center mt-[68px] ml-[50px]'>
          <div className='flex relative flex-col gap-[20px]'>
            <div className='text-[34px] leading-normal flex gap-[10px]'>
              <span>{personalData?.name}</span>
              <span>{personalData?.lastname}</span>
            </div>
            <div className='h-[40px]'>
              {personalData?.email && (
                <div className='flex gap-[10px]'>
                  <img src={atIMG} alt='at image' />{" "}
                  {personalData?.email}{" "}
                </div>
              )}
            </div>
            <div className='h-[40px]'>
              {personalData?.number && (
                <div className='flex gap-[10px]'>
                  <img src={phoneIMG} alt='phone image' />{" "}
                  {personalData?.number}{" "}
                </div>
              )}
            </div>
            {personalData?.optional && (
              <div className='h-[40px]'>
                <p className='mb-[10px] text-[#F93B1D] text-[18px] '>
                  About me
                </p>
                <span className='block max-w-[300px] break-words'>
                  {personalData?.optional}
                </span>
              </div>
            )}
            <img
              className='mt-[670px] w-[42px] h-[42px]'
              src={starIMG}
              alt='star image with red background'
            />
          </div>
        </div>
        <div>
          {image ? <img src={image} /> : <p>image dont found</p>}
        </div>
      </div>
    </div>
  );
}

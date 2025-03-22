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

  type inputTypes = {
    uni: string;
    degree: string;
    endDate: string;
    description: string;
  };

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<inputTypes>();

  const WendDate = watch("endDate");
  const Wdesciption = watch("description");
  const Wdegree = watch("degree");
  const Wuni = watch("uni");

   const storedData = localStorage.getItem("formData");
   const personalData = storedData ? JSON.parse(storedData) : {};

   


  const onSubmit = () => {};

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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col gap-[35px] mt-[30px] w-full '
          >
            <div className='flex relative flex-col gap-[7px]'>
              <p>School/University</p>
              <input
                {...register("uni", {
                  required: "required",
                  min: 2,
                })}
                type='text'
                className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]  ${
                  errors.uni
                    ? "border-[#EF5050]"
                    : !errors.uni && Wuni
                    ? "border-[#98E37E]"
                    : "border-gray-300"
                }`}
              />
              <p>Min.2 letters</p>
              {errors.uni ? (
                <img
                  className=' w-6 h-6 absolute top-[35%] right-[-30px]'
                  src={warning}
                />
              ) : !errors.uni && Wuni ? (
                <img
                  className='absolute top-[37%] w-6 h-6 right-[10px] '
                  src={check}
                />
              ) : (
                ""
              )}
            </div>

            <div className='flex w-full gap-[40px]'>
              <div className='w-1/2 flex flex-col gap-[8px]'>
                <p>Degree</p>
                <input
                  {...register("degree", { required: "required" })}
                  className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full  ${
                    errors.degree
                      ? "border-[#EF5050]"
                      : !errors.degree && Wdegree
                      ? "border-[#98E37E]"
                      : "border-gray-300"
                  }`}
                  type='text'
                />
              </div>

              <div className='w-1/2 flex flex-col gap-[8px] relative'>
                <p>End date</p>
                <input
                  className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full  ${
                    errors.endDate && !WendDate
                      ? "border-[#EF5050]"
                      : WendDate
                      ? "border-[#98E37E]"
                      : "border-gray-300"
                  }`}
                  type='text'
                  value={WendDate}
                  placeholder='mm / dd / yyyy'
                  readOnly
                />
                <input
                  {...register("endDate", {
                    required: "min 2 letters",
                  })}
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
            <div className='flex flex-col relative gap-[8px]'>
              <p>Description</p>
              <input
                {...register("description", {
                  required: "required",
                })}
                className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] pb-[80px] pt-[6px] font-[16px] border rounded-[4px] w-full ${
                  errors.description
                    ? "border-[#EF5050]"
                    : !errors.description && Wdesciption
                    ? "border-[#98E37E]"
                    : "border-gray-300"
                }`}
                type='text'
              />
              {errors.description? (
                <img
                  className=' w-6 h-6 absolute top-[50%] right-[-30px]'
                  src={warning}
                />
              ) : !errors.description && Wdesciption ? (
                <img
                  className='absolute  top-[50%] w-6 h-6 right-[10px] '
                  src={check}
                />
              ) : (
                ""
              )}
            </div>
            <div className='w-1/2 p-5'>
              <label htmlFor='dropdown'>Choose a fruit:</label>
              <select
                id='dropdown'
                className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full'
              >
                <option value='apple'>Apple</option>
                <option value='banana'>Banana</option>
                <option value='orange'>Orange</option>
                <option value='grapes'>Grapes</option>
              </select>
            </div>

            <hr className='bg-[#C1C1C1] h-[1.4px]' />
            <button className=' w-[280px] rounded-[4px] bg-[#62A1EB] text-[#fff] py-[15px]'>
              Add other School/University
            </button>
            <div className='flex justify-between mt-[100px]'>
              <button className='bg-[#6B40E3] rounded-[4px] text-white py-[10px] w-[100px]'>
                Back
              </button>
              <button
                type='submit'
                className='bg-[#6B40E3] rounded-[4px] text-white py-[10px] w-[100px]'
              >
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

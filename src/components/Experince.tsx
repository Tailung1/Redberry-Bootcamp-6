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

export default function Experince() {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(false);
  const [page, setPage] = useState<number>(3);

  const storedImage = localStorage.getItem("image");

  const [firstDate, setFirstDate] = useState("");
  const [secondDate, setSecondDate] = useState("");

  // Define the ref type as HTMLInputElement
  const firstDateRef = useRef<HTMLInputElement>(null);
  const secondDateRef = useRef<HTMLInputElement>(null);

  const handleFirstCalendarClick = () => {
    firstDateRef.current?.showPicker();
  };
  const handleFirstDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstDate(e.target.value);
    setValue("startDate", e.target.value);
  };

  const handleSecondCalendarClick = () => {
    secondDateRef.current?.showPicker?.();
    secondDateRef.current?.click();
  };

  const handleSecondDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSecondDate(e.target.value);
    setValue("endDate", e.target.value);
  };

  // Get the personal data from localStorage and parse it as an object
  const storedData = localStorage.getItem("formData");
  const personalData = storedData ? JSON.parse(storedData) : {};

  type inputTypes = {
    position: string;
    employer: string;
    startDate: string;
    endDate: string;
    description: string;
    position2: string;
    employer2: string;
    startDate2: string;
    endDate2: string;
    description2: string;
  };

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<inputTypes>();

  const Wposition = watch("position");
  const Wemployer = watch("employer");
  const Wstartdate = watch("startDate");
  const Wenddate = watch("endDate");
  const Wdescription = watch("description");

  const Wposition2 = watch("position2");
  const Wemployer2 = watch("employer2");
  const Wstartdate2 = watch("startDate2");
  const Wenddate2 = watch("endDate2");
  const Wdescriptio2 = watch("description2");

  useEffect(() => {
    const storagedExperince = localStorage.getItem(
      "formDataExperince"
    );
    if (storagedExperince) {
      const parsedExperince = JSON.parse(storagedExperince);
      setValue("position", parsedExperince.position);
      setValue("employer", parsedExperince.employer);
      setValue("startDate", parsedExperince.startDate);
      setValue("endDate", parsedExperince.endDate);
      setValue("description", parsedExperince.description);
    }
    const storagedFirstDate = localStorage.getItem(
      "startDateStorage"
    );
    if (storagedFirstDate) {
      const parsedStoragedFirstDate = JSON.parse(storagedFirstDate);
      setFirstDate(parsedStoragedFirstDate);
    }
    const storagedSecondDate =
      localStorage.getItem("endtDateStorage");
    if (storagedSecondDate) {
      const parsedStoragedFirstDate = JSON.parse(storagedSecondDate);
      setSecondDate(parsedStoragedFirstDate);
    }
  }, []);

  const inputCheck =
    Wposition || Wemployer || Wstartdate || Wenddate || Wdescription;
  const inputCheck2 =
    Wposition2 ||
    Wemployer2 ||
    Wstartdate2 ||
    Wenddate2 ||
    Wdescriptio2;

  const handleSaveInfo = (info: object) => {
    // if (typeof info !== "object") return;
    localStorage.setItem("formDataExperince", JSON.stringify(info));
    localStorage.setItem(
      "startDateStorage",
      JSON.stringify(firstDate)
    );
    localStorage.setItem(
      "endtDateStorage",
      JSON.stringify(secondDate)
    );
  };
  const handleBackClick = () => {
    // Save the form data on clicking "Back"
    const formData = {
      position: Wposition,
      employer: Wemployer,
      startDate: Wstartdate,
      endDate: Wenddate,
      description: Wdescription,
    };

    handleSaveInfo(formData);
    navigate("/personal");
  };

  const onSubmit = (data: object) => {
    handleSaveInfo(data);
    if (show && !inputCheck2) return;
    localStorage.setItem("formDataExperince", JSON.stringify(data));
    localStorage.setItem(
      "startDateStorage",
      JSON.stringify(firstDate)
    );
    localStorage.setItem(
      "endtDateStorage",
      JSON.stringify(secondDate)
    );
    navigate("/personal/experince/education");
  };

  return (
    <div className='flex items-start bg-[#F9F9F9]'>
      <div className='flex gap-[60px]  py-[48px] pl-[48px]  pr-[70px]  w-1/2 mt-48px '>
        <div>
          <img
            onClick={() => {
              navigate("/");
              localStorage.removeItem("formData");
              localStorage.removeItem("image");
              localStorage.removeItem("formDataExperince");
              localStorage.removeItem("startDateStorage");
              localStorage.removeItem("endtDateStorage");
              setFirstDate("");
              setSecondDate("");
            }}
            className='cursor-pointer'
            src={arrowIMG}
            alt='arrow image'
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-[12px]'>
            <div className='flex justify-between'>
              <h2>Experience</h2>
              <p>2/{page}</p>
            </div>
            <hr className='bg-[#1A1A1A] h-[2px]' />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='mt-[40px] flex flex-col gap-[20px]'
          >
            {/* position */}
            {/* position */}
            {/* position */}
            <div className='flex flex-col w-full gap-[5px] relative'>
              <h3>Position</h3>
              <input
                {...register("position", {
                  required: "Position input Can't be empty",
                  minLength: {
                    value: 2,
                    message: "Min 2",
                  },
                })}
                type='text'
                placeholder='developer'
                className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] ${
                  errors?.position
                    ? "border-[#EF5050]"
                    : Wposition?.length >= 2
                    ? "border-[#98E37E]"
                    : "border-gray-300"
                }`}
              />
              {errors.position && (
                <img
                  className='absolute w-5 h-5 right-[-25px] top-1/2 transform -translate-y-1/2'
                  src={warning}
                  alt='warning icon'
                />
              )}
              {Wposition?.length >= 2 && (
                <img
                  className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2'
                  src={check}
                  alt='warning icon'
                />
              )}
              <p>Min.2 Letters</p>
            </div>

            {/* employer */}
            {/* employer */}
            {/* employer */}
            <div className='flex flex-col gap-[5px] relative'>
              <h3>Employer</h3>
              <input
                {...register("employer", {
                  required: "Position input Can't be empty",
                  minLength: {
                    value: 2,
                    message: "Min 2",
                  },
                })}
                type='text'
                placeholder='company'
                className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] ${
                  errors.employer
                    ? "border-[#EF5050]"
                    : Wemployer?.length >= 2
                    ? "border-[#98E37E]"
                    : "border-gray-300"
                }`}
              />
              <p>min.2 letters</p>
              {errors.employer && (
                <img
                  className='absolute w-6 h-6 right-[-26px] top-12 transform -translate-y-1/2'
                  src={warning}
                  alt='warning icon'
                />
              )}
              {Wemployer?.length >= 2 && (
                <img
                  className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2'
                  src={check}
                  alt='check icon'
                />
              )}
            </div>
            <div className='flex gap-[25px] w-full'>
              {/* First Date */}
              {/* First Date */}
              {/* First Date */}

              <div className='flex flex-col relative gap-[5px] w-full'>
                <h3>Start date</h3>
                <input
                  type='text'
                  placeholder='YYYY-MM-DD'
                  className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] ${
                    !Wstartdate && errors.startDate
                      ? "border-[#EF5050]"
                      : Wstartdate
                      ? "border-[#98E37E]"
                      : "border-gray-300"
                  }`}
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
                  {...register("startDate", {
                    required: "Start date is required",
                  })}
                  type='date'
                  ref={firstDateRef}
                  className='hidden'
                  onChange={handleFirstDateChange}
                />
              </div>

              {/* Second Date */}
              {/* Second Date */}
              {/* Second Date */}

              <div className='flex flex-col relative gap-[5px] w-full]'>
                <h3>End Date</h3>
                <input
                  type='text'
                  placeholder='YYYY-MM-DD'
                  className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] ${
                    errors.endDate && !Wenddate
                      ? "border-[#EF5050]"
                      : Wenddate
                      ? "border-[#98E37E]"
                      : "border-gray-300"
                  }`}
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
                  {...register("endDate", {
                    required: "End date required",
                  })}
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
              </div>
            </div>
            <div className='flex flex-col gap-[5px] w-full'>
              <p>Description</p>
              <textarea
                {...register("description", {
                  required: "Cant be Empty",
                })}
                placeholder='Description'
                className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] pt-[6px] pb-[40px] font-[16px] border rounded-[4px] w-full ${
                  errors.description && !Wdescription
                    ? "border-[#EF5050]"
                    : Wdescription
                    ? "border-[#98E37E]"
                    : "border-gray-300"
                }`}
              />
            </div>
            <hr className='h-[1.5px] bg-[#C1C1C1] mt-[50px]' />

            {/* Second form*/}
            {/* Second form*/}
            {/* Second form*/}

            <div
              className={`mt-[40px] flex  flex-col gap-[20px] ${
                show ? "block" : "hidden"
              }  `}
            >
              <div className='flex flex-col gap-[5px]'>
                <h3>Position</h3>
                <input
                  {...register("position2")}
                  type='text'
                  placeholder='developer'
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                />
                <p>min 2 letters</p>
              </div>
              <div className='flex flex-col gap-[5px]'>
                <h3>Company</h3>
                <input
                  {...register("employer2")}
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
                    placeholder='YYYY-MM-DD'
                    className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                    readOnly
                  />
                  <img
                    src={calendar}
                    className='absolute right-2 top-9 cursor-pointer z-10'
                    alt='calendar icon'
                    onClick={handleFirstCalendarClick}
                  />
                  <input
                    {...register("startDate2")}
                    type='date'
                    ref={firstDateRef}
                    style={{ display: "none" }}
                    onChange={handleFirstDateChange}
                  />
                </div>

                {/* Second Date */}
                <div className='flex flex-col relative gap-[5px] w-full]'>
                  <h3>Second Date</h3>
                  <input
                    type='text'
                    placeholder='YYYY-MM-DD'
                    className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px]'
                    readOnly
                  />
                  <img
                    src={calendar}
                    className='absolute right-2 top-9 cursor-pointer z-10'
                    alt='calendar icon'
                    onClick={handleSecondCalendarClick}
                  />
                  <input
                    {...register("endDate2")}
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
                </div>
              </div>

              <div className='flex flex-col gap-[5px] w-full'>
                <p>Description</p>
                <textarea
                  {...register("description2")}
                  placeholder='Description'
                  className='focus:outline-none focus:ring-0 pl-[15px] pr-[30px] pt-[6px] pb-[40px] font-[16px] border rounded-[4px] w-full'
                />
              </div>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setShow(!show), setPage(4);
              }}
              className='bg-[#62A1EB] py-[12px] mt-[45px]  text-[#FFF] text-[16px] w-[200px] rounded-[4px]'
            >
              Add more experince
            </button>
            <div className='flex justify-between mt-[100px]'>
              <button
                name='action'
                value={"back"}
                type='button'
                onClick={() => {
                  navigate("/personal");
                  handleBackClick();
                }}
                className='rounded-[4px] bg-[#6B40E3] text-white py-[7px] w-[80px]'
              >
                back
              </button>
              <button
                name='action'
                value={"forward"}
                type='submit'
                className='bg-[#6B40E3] rounded-[4px] text-white py-[10px] w-[100px]'
              >
                Forward
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Summary Section */}
      {/* Summary Section */}
      {/* Summary Section */}

      <div className='bg-[#fff] flex  w-1/2 gap-[220px] px-[50px] pt-[40px]'>
        <div className='flex relative flex-col  gap-[20px]'>
          <div className='text-[34px] leading-normal flex gap-[10px] text-[#F93B1D]'>
            <span>{personalData?.name}</span>
            <span>{personalData?.lastname}</span>
          </div>
          <div className='h-[15px]'>
            {personalData?.email && (
              <div className='flex gap-[10px]'>
                <img src={atIMG} alt='at image' />{" "}
                {personalData?.email}{" "}
              </div>
            )}
          </div>
          <div className='h-[20px]'>
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

          {""}
          {""}
          {""}
          {""}
          <div className='flex relative flex-col mt-[120px] w-[200px] '>
            {inputCheck && (
              <p className='text-[#F93B1D] mb-[10px] text-[30px]'>
                Experince
              </p>
            )}
            <div className='flex h-[30px] gap-[5px] text-[#1A1A1A] font-medium text-[19px] break-words'>
              <div>
                {Wposition && (
                  <p>
                    {Wposition}
                    {Wemployer && <span>,</span>}{" "}
                  </p>
                )}
              </div>
              <div className='h-[30px'>
                {Wemployer && <p>{Wemployer}</p>}
              </div>
            </div>
            <div className='flex gap-[5px] h-[30px] text-[16px]'>
              <p className='text-[#909090]'>{Wstartdate}</p>
              {Wenddate && <span className='text-[#909090]'>-</span>}
              <p className='text-[#909090]'>{Wenddate}</p>
            </div>
            <p className='text-[#000] break-words'>{Wdescription}</p>
          </div>
          {""}
          {""}
          {""}
          {""}
          <img
            className=' mt-[350px] mb-[44px]  w-[42px] h-[42px]'
            src={starIMG}
            alt='star image with red background'
          />
        </div>

        <div>
          {storedImage && (
            <img
              className='h-[200px] rounded-full'
              src={storedImage}
            />
          )}
        </div>
        <hr className='bg-[#1A1A1A]  h-[2px] absolute w-[620px] top-[300px]' />
      </div>
    </div>
  );
}

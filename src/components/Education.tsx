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
  const navigate = useNavigate();
  const [endDate, setEndDate] = useState("");
  const [degree, setDegree] = useState(""); // State to store the selected degree
  const [degreeDropdownOpen, setDegreeDropdownOpen] = useState(false);
  const [arrowRotation, setArrowRotation] = useState(180); // Initial arrow rotation (pointing up)

  useEffect(() => {
    const storagedEducation = localStorage.getItem(
      "formDataEducation"
    );
    if (storagedEducation) {
      const parsedEducation = JSON.parse(storagedEducation);
      setValue("uni", parsedEducation.uni);
      setValue("endDate", parsedEducation.endDate);
      setValue("degreeRegist", parsedEducation.degree);
      setValue("description", parsedEducation.description);
    }

    const storagedFirstDate = localStorage.getItem(
      "startDateStorage"
    );
    if (storagedFirstDate) {
      const parsedStoragedFirstDate = JSON.parse(storagedFirstDate);
      setEndDate(parsedStoragedFirstDate);
    }

    const storagedDegree = localStorage.getItem("degree");
    if (storagedDegree) {
      const parsedDegree = JSON.parse(storagedDegree);
      setValue("degreeRegist", parsedDegree);
      setDegree(parsedDegree);
    }
  }, []);

  const endDateRef = useRef<HTMLInputElement>(null);

  const handleDateClick = () => endDateRef.current?.showPicker();
  const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue("endDate", e.target.value);
    setEndDate(e.target.value);
  };

  type inputTypes = {
    uni: string;
    degreeRegist: string;
    endDate: string;
    description: string;
  };

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<inputTypes>();

  const WendDate = watch("endDate");
  const Wdesciption = watch("description");
  const Wuni = watch("uni");
  const WdegreeRegist = watch("degreeRegist");

  const storedData = localStorage.getItem("formData");
  const pdp = storedData ? JSON.parse(storedData) : {};

  const storedDataExperince = localStorage.getItem(
    "formDataExperince"
  );
  const pde = storedDataExperince
    ? JSON.parse(storedDataExperince)
    : {};

  const handleSaveInfo = (info: object) => {
    localStorage.setItem("formDataEducation", JSON.stringify(info));
    localStorage.setItem("endDateStorage", JSON.stringify(endDate));
    localStorage.setItem("degreeStorage", JSON.stringify(degree));
  };

  const handleBackClick = () => {
    const formData = {
      uni: Wuni,
      degree: WdegreeRegist,
      endDate: WendDate,
      description: Wdesciption,
    };
    handleSaveInfo(formData);
  };

  const onSubmit = (data: object) => {
    localStorage.setItem("formDataEducation", JSON.stringify(data));
  };

  // Handle dropdown toggle and arrow rotation
  const handleInputClick = () => {
    setDegreeDropdownOpen((prev) => !prev); // Toggle dropdown visibility
    setArrowRotation((prev) => (prev === 0 ? 180 : 0)); // Rotate arrow up or down
  };

  // Handle degree selection
  type DegreeOption =
    | "Associate degree"
    | "Bachelor's degree"
    | "Master's degree"
    | "Doctoral degree";

  const handleDegreeClick = (selectedDegree: DegreeOption) => {
    setDegree(selectedDegree); // Set the selected degree
    setDegreeDropdownOpen(false); // Close the dropdown
    setArrowRotation(180); // Rotate the arrow back up

    setValue("degreeRegist", selectedDegree); // Set the hidden input
    trigger("degreeRegist"); // Re-validate so
    // Optional: Add a delay to let the dropdown close before resetting the arrow
    setTimeout(() => {
      setArrowRotation(180); // Reset the arrow to point up
    }, 300); // Adjust this delay as necessary
  };
  return (
    <div>
      <div className='bg-[#F9F9F9] flex gap-[20px] w-1/2 py-[20px] px-[50px]'>
        <div>
          <img
            onClick={() => localStorage.clear()}
            src={arrowIMG}
            alt='arrow icon'
          />
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
              {""}
              {""}
              {""}

              <div className='relative flex flex-col w-1/2 gap-[8px]'>
                <p>Degree</p>
                <input
                  type='text'
                  {...register("degreeRegist", { required: true })}
                  value={degree}
                  readOnly
                  hidden
                />

                <div
                  className={`relative flex items-center justify-between py-[6px] pl-[15px] pr-[30px] font-[16px] border rounded-[4px] cursor-pointer ${
                    errors.degreeRegist
                      ? "border-[#EF5050]"
                      : degree
                      ? "border-[#98E37E]"
                      : "border-gray-300"
                  }`}
                  onClick={handleInputClick}
                >
                  <span>{degree || "Select degree"}</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-5 h-5 text-gray-400 transition-transform duration-300'
                    style={{
                      transform: `rotate(${arrowRotation}deg)`,
                    }}
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </div>

                <div
                  className={`absolute mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10 max-h-60 overflow-y-auto w-[50vw] max-w-[260px] transition-all duration-500 ease-in-out`} // Increased duration to 500ms for slower effect
                  style={{
                    top: "calc(100% + 5px)", // Space between input and dropdown
                    maxHeight: degreeDropdownOpen ? "500px" : "0", // Transition max-height based on dropdown state
                    opacity: degreeDropdownOpen ? 1 : 0, // Fade in/out based on dropdown state
                    pointerEvents: degreeDropdownOpen
                      ? "auto"
                      : "none", // Prevent interaction when closed
                  }}
                >
                  <div
                    className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'
                    onClick={() =>
                      handleDegreeClick("Associate degree")
                    }
                  >
                    Associate degree
                  </div>
                  <div
                    className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'
                    onClick={() =>
                      handleDegreeClick("Bachelor's degree")
                    }
                  >
                    Bachelor's degree
                  </div>
                  <div
                    className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'
                    onClick={() =>
                      handleDegreeClick("Master's degree")
                    }
                  >
                    Master's degree
                  </div>
                  <div
                    className='px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100'
                    onClick={() =>
                      handleDegreeClick("Doctoral degree")
                    }
                  >
                    Doctoral degree
                  </div>
                </div>
              </div>

              {""}
              {""}
              {""}

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
                  value={endDate}
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
              {errors.description ? (
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

            <hr className='bg-[#C1C1C1] h-[1.4px]' />
            <button className=' w-[280px] rounded-[4px] bg-[#62A1EB] text-[#fff] py-[15px]'>
              Add other School/University
            </button>
            <div className='flex justify-between mt-[100px]'>
              <button
                onClick={() => {
                  handleBackClick();
                  navigate("/personal/experince");
                }}
                className='bg-[#6B40E3] rounded-[4px] text-white py-[10px] w-[100px]'
              >
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

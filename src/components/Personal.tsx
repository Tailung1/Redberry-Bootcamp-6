import React, { useState } from "react";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import check from "../assets/check.svg";
import warning from "../assets/warning.svg";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Personal() {
  const [page, setPage] = useState<number>(1);
  const [image, setImage] = useState<null | string>(null);

  const navigate = useNavigate();

  interface errorTypes {
    name: string;
    lastname: string;
    optional: string;
    image: File;
    email: string;
    number: string;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<errorTypes>();

  const name = watch("name");
  const lastName = watch("lastname");
  const optional = watch("optional");
  const email = watch("email");
  const number = watch("number");

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const onSubmit = (data: object) => {
    event?.preventDefault();
    navigate("/personal/experince");
    console.log(data);
  };

  return (
    <div className='flex'>
      <div className='bg-[#F9F9F9] flex flex-col w-1/2 px-[90px] py-[40px]'>
        {/* Header Section */}
        <div className='flex w-full items-center space-x-4'>
          <img
            className='cursor-pointer'
            onClick={() => navigate("/")}
            src={arrowIMG}
            alt=''
          />
          <div className='flex flex-col gap-[15px] w-full'>
            <div className='flex justify-between'>
              <h2>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h2>
              <p>{page}/3</p>
            </div>
            <hr />
          </div>
        </div>
        <div className='mt-[30px] pl-[55px] pr-[14]'>
          {/* Form Section */}
          <form
            className='flex flex-col gap-[35px] w-full'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex w-full gap-[60px]'>
              {/* Name Input Section */}
              <div className='flex flex-col gap-[8px] w-full'>
                <label htmlFor='name'>Name</label>
                <div className='relative w-full'>
                  <input
                    {...register("name", {
                      required: "Name input can't be empty",
                      minLength: {
                        value: 2,
                        message: "Min. 2 Georgian Letters",
                      },
                      pattern: {
                        value: /^[\u10A0-\u10FF]+$/, // This regex matches Georgian letters only
                        message: "Only Georgian letters are allowed", // Error message if input doesn't match the pattern
                      },
                    })}
                    type='text'
                    id='name'
                    placeholder={"chicha"}
                    className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full ${
                      errors.name || !name?.length
                        ? "pr-[50px]" // Padding for error state
                        : "pr-[30px]" // Default padding
                    } ${
                      errors.name
                        ? "border-[#EF5050]"
                        : name?.length >= 2 &&
                          /^[\u10A0-\u10FF]+$/.test(name)
                        ? "border-[#98E37E]"
                        : "border-gray-300"
                    }`}
                  />
                  {/* Display check icon only when the input is valid (3+ Georgian letters) */}
                  {name?.length >= 2 &&
                    /^[\u10A0-\u10FF]+$/.test(name) &&
                    !errors.name && (
                      <img
                        src={check}
                        alt='valid'
                        className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2'
                      />
                    )}
                  {/* Display warning icon outside of the input when there's an error */}
                  {errors.name && (
                    <img
                      src={warning}
                      alt='warning'
                      className='absolute w-5 h-5 right-[-25px] top-1/2 transform -translate-y-1/2' // 10px outside the input
                    />
                  )}
                </div>
                {/* Show error message or placeholder */}
                {errors.name ? (
                  <p className='text-red-500'>
                    {errors.name.message}
                  </p>
                ) : (
                  <p>Min. 3 Georgian Letters</p>
                )}
              </div>

              {/* Last Name Input Section */}
              <div className='flex flex-col gap-[8px] w-full'>
                <label htmlFor='lastname'>LastName</label>
                <input
                  {...register("lastname", { required: "Qswqs" })}
                  type='text'
                  id='lastname'
                  placeholder={"mumladze"}
                  className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px] w-full'
                />
                <p>Min.2 Georgian Letter</p>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className='flex gap-[15px] items-center'>
              <p>Upload a personal photo</p>
              <label className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
                Upload Photo
                <input
                  {...register("image")}
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden' // Hide the actual input, style the label as the button
                />
              </label>
            </div>

            {/* About Me Section */}
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor='optional'>About me (Optional)</label>
              <textarea
                {...register("optional")}
                id='optional'
                placeholder='General info about you'
                className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px ] h-[100px]'
              />
            </div>

            {/* Email Section */}
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor=''>Email</label>
              <input
                {...register("email")}
                type='text'
                placeholder='anzorr666@redberry.ge'
                className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px]'
              />
              <p>Must end with @redberry.ge</p>
            </div>

            {/* Mobile Number Section */}
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor='mobNum'>Mobile Number</label>
              <input
                {...register("number")}
                type='text'
                id='mobNum'
                placeholder='+995 551 12 34 56'
                className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px]'
              />
              <p>
                Must comply with the Georgian mobile number format
              </p>
            </div>

            {/* Submit Button */}
            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-[#6B40E3] px-[60px] py-[10px] text-[16px] text-white rounded-[4px] mt-[100px] w-[30px] flex justify-center'
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Summary Section */}
      <div className='bg-white '>
        <div className='flex items-center mt-[68px] ml-[50px]'>
          <div className='flex relative flex-col gap-[20px]'>
            <div className='text-[34px] leading-normal flex gap-[10px] className="h-[40px] text-[#F93B1D]'>
              <span>{name}</span>
              <span>{lastName}</span>
            </div>
            <div className='h-[40px]'>
              {email && (
                <div className='flex gap-[10px]'>
                  <img src={atIMG} alt='at image' /> {email}{" "}
                </div>
              )}
            </div>
            <div className='h-[40px]'>
              {number && (
                <div className='flex gap-[10px]'>
                  <img src={phoneIMG} alt='at image' /> {number}{" "}
                </div>
              )}
            </div>
            {optional && (
              <div className='h-[40px]'>
                <p className='mb-[10px] text-[#F93B1D] text-[18px] '>
                  About me
                </p>
                <span className='block max-w-[300px] break-words'>
                  {optional}
                </span>
              </div>
            )}
            <img
              className='mt-[530px] w-[42px] h-[42px]'
              src={starIMG}
              alt='star image with red background'
            />
          </div>
          <div className='h-[40px]'>
            {image && (
              <img
                src={image}
                alt='Uploaded'
                className='absolute right-10 top-20 w-[200px] h-[200px] object-cover rounded-full'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

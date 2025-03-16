import React, { EventHandler, useState } from "react";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import { useForm } from "react-hook-form";

export default function Personal() {
  const [page, setPage] = useState<number>(1);
  const [image, setImage] = useState<null | string>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

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

  return (
    <div className='flex'>
      <div className='bg-[#F9F9F9]   flex flex-col w-1/2 p-5'>
        <div className='flex w-full items-center space-x-4'>
          <img src={arrowIMG} alt='' />
          <div className='flex flex-col gap-[15px] w-full'>
            <div className='flex justify-between'>
              <h2>ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</h2>
              <p>{page}/3</p>
            </div>
            <hr />
          </div>
        </div>

        <div className='mt-[30px]  pl-[55px]   pr-[14]'>
          <form className='flex flex-col gap-[35px] w-full '>
            <div className='flex  w-full gap-[24px] '>
              <div className='flex flex-col gap-[8px] w-full '>
                <label htmlFor='name'>Name</label>
                <input
                  {...register("name")}
                  type='text'
                  id='name'
                  placeholder={"chicha"}
                  className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px]'
                />
                <p>Min.2 Georgian Letter</p>
              </div>
              <div className='flex flex-col gap-[8px] w-full'>
                <label htmlFor='lastname'>LastName</label>
                <input
                  {...register("lastname")}
                  type='text'
                  id='lastname'
                  placeholder={"mumladze"}
                  className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px]'
                />
                <p>Min.2 Georgian Letter</p>
              </div>
            </div>
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
            <div className='flex flex-col gap-[8px]'>
              <label htmlFor='optional'>About me (Optional)</label>
              <input
                {...register("optional")}
                type='text'
                id='optional'
                placeholder='General info about you'
                className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px]'
              />
            </div>
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
          </form>
        </div>
        <div className='flex justify-end '>
          <button className='bg-[#6B40E3] px-[60px] py-[10px] text-[16px] text-white rounded-[4px] mt-[100px]  w-[30px] flex  justify-center'>
            Next
          </button>
        </div>
      </div>

      <div className='bg-white  p-4'>
        <div className='flex items-center mt-[68px] ml-[80px]'>
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
                </p>{" "}
                <span className='block max-w-[300px] break-words'>
                  {optional}
                </span>
              </div>
            )}
            <img
              className=' mt-[530px] w-[42px] h-[42px]'
              src={starIMG}
              alt='star image with red background'
            />
          </div>
          <div className='h-[40px]'>
            {image && (
              <img
                src={image}
                alt='Uploaded'
                className=' absolute right-20 top-20 w-[230px] h-[230px] object-cover rounded-full'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

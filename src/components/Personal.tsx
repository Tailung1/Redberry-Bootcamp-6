import React, { EventHandler, useState } from "react";
import arrowIMG from "../assets/arrow.svg";

export default function Personal() {
  const [page, setPage] = useState<number>(1);
  const [image, setImage] = useState<null | string>(null);

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
      <div className='bg-[#F9F9F9] flex flex-col w-1/2 p-5'>
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
          <form className='flex flex-col gap-[46px] w-full '>
            <div className='flex  w-full gap-[24px]'>
              <div className='flex flex-col gap-[8px] w-full'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  placeholder={"chicha"}
                  className='1px border rounded-[4px] px-[15px] py-[6px] font-[16px]'
                />
                <p>Min.2 Georgian Letter</p>
              </div>
              <div className='flex flex-col gap-[8px] w-full '>
                <label htmlFor='lastname'>LastName</label>
                <input
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
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden' // Hide the actual input, style the label as the button
                />
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className='bg-white w-1/2 p-4'>
        <div>
          {image && (
            <img
              src={image}
              alt='Uploaded'
              className='w-40 h-40 object-cover rounded-full'
            />
          )}
        </div>
      </div>
    </div>
  );
}

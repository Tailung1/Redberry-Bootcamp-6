import React from "react";

interface UploadPhotoProps {
  register: any; // Replace 'any' with `UseFormRegister` if using react-hook-form
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function UploadPhoto({
  register,
  onChange,
}: UploadPhotoProps) {
  return (
    <div className='flex gap-[15px] items-center'>
      <p>Upload a personal photo</p>
      <label className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
        Upload Photo
        <input
          {...register("image")}
          type='file'
          accept='image/*'
          onChange={onChange}
          className='hidden'
        />
      </label>
    </div>
  );
}

import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  register: any;
  placeholder?: string;
  inputClass?: string;
  labelClass?: string;
  errorMessage?: string;
}

export default function InputField({
  label,
  id,
  register,
  placeholder = "",
  inputClass = "",
  labelClass = "",
  errorMessage = "",
}: InputFieldProps) {
  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        {...register(id)}
        type='text'
        id={id}
        placeholder={placeholder}
        className={inputClass}
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

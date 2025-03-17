import { RegisterOptions } from "react-hook-form"; // Import RegisterOptions from react-hook-form

interface InputFieldProps {
  label: string;
  id: string;
  register: any;
  placeholder?: string;
  inputClass?: string;
  labelClass?: string;
  errorMessage?: string;
  error?: any;
  validation?: RegisterOptions; // Add validation prop with correct type
}

export default function InputField({
  label,
  id,
  register,
  placeholder = "",
  inputClass = "border rounded-[4px] px-[15px] py-[6px] font-[16px]",
  labelClass = "text-blue-500 font-bold",
  errorMessage = "",
  error,
  validation, // Receive validation here
}: InputFieldProps) {
  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        {...register(id, validation)} // Apply validation here
        type='text'
        id={id}
        placeholder={placeholder}
        className={inputClass}
      />
      {error && (
        <p className='text-[#2E2E2E] font-light'>
          {error?.message || errorMessage}
        </p>
      )}
    </div>
  );
}

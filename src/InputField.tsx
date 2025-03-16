

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
  inputClass = "border rounded-[4px] px-[15px] py-[6px] font-[16px]",
  labelClass = "text-blue-500 font-bold",
  errorMessage = "",
}: InputFieldProps) {
  return (
    <div className='flex flex-col gap-[8px] w-full '>
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

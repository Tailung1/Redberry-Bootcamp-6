import React, { useEffect, useState } from "react";
import arrowIMG from "../assets/arrow.svg";
import starIMG from "../assets/star.png";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import check from "../assets/check.svg";
import warning from "../assets/warning.svg";
import IMask from "imask"; // Import IMask
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Personal() {
  const navigate = useNavigate();
  const [image, setImage] = useState<null | string>(null);

  type FormDataType = yup.InferType<typeof schema>;

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Name input can't be empty")
      .min(2, "Min. 2 Georgian Letters")
      .matches(
        /^[\u10A0-\u10FF]+$/,
        "Only Georgian letters are allowed"
      ),
    lastname: yup
      .string()
      .required("LastName input can't be empty")
      .min(2, "Min. 2 Georgian Letters")
      .matches(
        /^[\u10A0-\u10FF]+$/,
        "Only Georgian letters are allowed"
      ),
    email: yup
      .string()
      .required("Email input can't be empty")
      .matches(/^[a-zA-Z0-9._%+-]+@redberry\.ge$/),
    number: yup.string().required().min(17),
    optional: yup.string(),
    image: yup.mixed<File>().required(),
  });

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(schema),
  });

  const name = watch("name");
  const lastName = watch("lastname");
  const optional = watch("optional");
  const email = watch("email");
  const number = watch("number");

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setValue("name", parsedData.name || "");
      setValue("lastname", parsedData.lastname || "");
      setValue("email", parsedData.email || "");
      setValue("number", parsedData.number || "");
      setValue("optional", parsedData.optional || "");
    //   trigger();
      // Add any other fields you want to pre-fill here
    }
  }, [setValue, trigger]);

  useEffect(() => {
    // Load the image from localStorage when the component mounts
    const savedImage = localStorage.getItem("image");
    if (savedImage) {
      setImage(savedImage);
    }
  }, [setImage]); // Only run on mount to avoid infinite loop

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      localStorage.setItem("image", imageUrl);
    }
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const numberInput = document.getElementById(
      "mobNum"
    ) as HTMLInputElement;
    const mask = IMask(numberInput, {
      mask: "+995 000 00 00 00", // Georgian phone number format
      lazy: true, // Show placeholder immediately
      overwrite: true, // Ensures no underscores appear
    });

    return () => {
      mask.destroy(); // Clean up the mask when component unmounts
    };
  }, []);

  const onSubmit = (data: object) => {
    if (!image) return;

    navigate("/personal/experince");
    localStorage.setItem("formData", JSON.stringify(data)); // Store form data in localStorage

    console.log(data);
  };

  return (
    <div className='flex'>
      <div className='bg-[#F9F9F9] flex flex-col w-[54%] px-[90px] py-[40px]'>
        {/* Header Section */}
        <div className='flex w-full items-center space-x-4'>
          <img
            className='cursor-pointer'
            onClick={() => {
              navigate("/"), localStorage.removeItem("formData");
              localStorage.removeItem("image");
              setImage("");
            }}
            src={arrowIMG}
            alt=''
          />
          <div className='flex flex-col gap-[15px] w-full'>
            <div className='flex justify-between'>
              <h2>Personal Info</h2>
              <p>1/3</p>
            </div>
            <hr />
          </div>
        </div>
        <div className='mt-[30px] pl-[55px] pr-[14]'>
          {/* Form Section */}
          {/* Form Section */}
          {/* Form Section */}

          <form
            className='flex flex-col gap-[35px] w-full'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex w-full gap-[60px]'>
              {/* Name Input Section */}
              {/* Name Input Section */}
              {/* Name Input Section */}

              <div className='flex flex-col gap-[8px] w-full'>
                <label htmlFor='Name'>Name</label>
                <div className='relative w-full'>
                  <input
                    {...register("name")}
                    type='text'
                    name='name'
                    id='name'
                    placeholder={"chicha"}
                    className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full  ${
                      errors.name
                        ? "border-[#EF5050]"
                        : /^[\u10A0-\u10FF]+$/.test(name) &&
                          !errors.name &&
                          name.length >= 2
                        ? "border-[#98E37E]"
                        : "border-gray-300"
                    }`}
                  />
                  {/* Display check icon only when the input is valid (3+ Georgian letters) */}
                  {/^[\u10A0-\u10FF]+$/.test(name) &&
                    !errors.name &&
                    name.length >= 2 && (
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
                  <p className='font-light'>
                    Min. 2 Georgian Letters
                  </p>
                )}
              </div>

              {/* Last Name Input Section */}
              {/* Last Name Input Section */}
              {/* Last Name Input Section */}
              {/* Last Name Input Section */}

              <div className='flex flex-col gap-[8px] w-full'>
                <label htmlFor='lastname'>Lastname</label>
                <div className='relative w-full'>
                  <input
                    {...register("lastname")}
                    type='text'
                    name='lastname'
                    id='lastname'
                    placeholder={"chicha"}
                    className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full ${
                      errors.lastname || !lastName?.length
                        ? "pr-[50px]" // Padding for error state
                        : "pr-[30px]" // Default padding
                    } ${
                      errors.lastname
                        ? "border-[#EF5050]"
                        : /^[\u10A0-\u10FF]+$/.test(lastName) &&
                          !errors.lastname &&
                          lastName.length >= 2
                        ? "border-[#98E37E]"
                        : "border-gray-300"
                    }`}
                  />
                  {/* Display check icon only when the input is valid (3+ Georgian letters) */}
                  {!errors.lastname &&
                    /^[\u10A0-\u10FF]+$/.test(lastName) &&
                    lastName.length >= 2 && (
                      <img
                        src={check}
                        alt='valid'
                        className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2'
                      />
                    )}
                  {/* Display warning icon outside of the input when there's an error */}
                  {errors.lastname && (
                    <img
                      src={warning}
                      alt='warning'
                      className='absolute w-5 h-5 right-[-25px] top-1/2 transform -translate-y-1/2'
                    />
                  )}
                </div>
                {/* Show error message or placeholder */}
                {errors.lastname ? (
                  <p className='text-red-500'>
                    {errors.lastname.message}
                  </p>
                ) : (
                  <p className='font-light'>
                    Min. 2 Georgian Letters
                  </p>
                )}
              </div>
            </div>

            {/* Photo Upload Section */}
            {/* Photo Upload Section */}
            {/* Photo Upload Section */}
            {/* Photo Upload Section */}

            <div className='flex gap-[15px] items-center'>
              <p>Upload a personal photo</p>
              <label className='cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'>
                Upload Photo
                <input
                  {...register("image", {
                    validate: () => (image ? true : false),
                  })}
                  type='file'
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden' // Hide the actual input, style the label as the button
                />
              </label>

              {/* Show check icon if an image is uploaded, or warning icon if not */}
              {isSubmitted && !image ? (
                <img
                  className='w-6 h-6'
                  src={warning}
                  alt='Warning: No image uploaded'
                />
              ) : image ? (
                <img
                  className='w-6 h-6'
                  src={check}
                  alt='Valid image'
                />
              ) : null}
            </div>

            {/* About Me Section */}
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
            {/* Email Section */}

            <div className='flex flex-col relative  gap-[8px]'>
              <label htmlFor=''>Email</label>
              <input
                {...register("email")}
                type='text'
                placeholder='balisha@redberry.ge'
                className={`focus:outline-none focus:ring-0  border rounded-[4px] px-[15px] py-[6px] font-[16px] ${
                  errors.email
                    ? "border-[#EF5050]"
                    : !errors.email &&
                      /^[a-zA-Z0-9._%+-]+@redberry\.ge$/.test(email)
                    ? "border-[#98E37E]"
                    : "border-gray-300"
                }`}
              />
              <p className='font-light'>
                Email must end with @redberry.ge
              </p>
              {/^[a-zA-Z0-9._%+-]+@redberry\.ge$/.test(email) &&
                !errors.email && (
                  <img
                    src={check}
                    alt='valid'
                    className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2'
                  />
                )}
              {/* Display warning icon outside of the input when there's an error */}
              {errors.email && (
                <img
                  src={warning}
                  alt='warning'
                  className='absolute w-5 h-5 right-[-25px] top-1/2 transform -translate-y-1/2'
                />
              )}
            </div>

            {/* Mobile Number Section */}
            {/* Mobile Number Section */}
            {/* Mobile Number Section */}

            <div className='flex flex-col gap-[8px]'>
              <label htmlFor='mobNum'>Mobile Number</label>
              <div className='relative w-full'>
                <input
                  {...register("number")}
                  type='text'
                  id='mobNum'
                  placeholder='+995 597 63 45 16'
                  className={`focus:outline-none focus:ring-0 pl-[15px] pr-[30px] py-[6px] font-[16px] border rounded-[4px] w-full ${
                    errors.number
                      ? "border-[#EF5050]"
                      : !errors.number && number?.length >= 17
                      ? "border-[#98E37E]"
                      : "border-gray-300"
                  }`}
                />

                {/* ✅ Check icon */}
                {number?.length >= 17 && !errors.number && (
                  <img
                    src={check}
                    alt='valid'
                    className='absolute w-5 h-5 right-2 top-1/2 transform -translate-y-1/2'
                  />
                )}

                {/* ⚠️ Warning icon */}
                {errors.number && (
                  <img
                    src={warning}
                    alt='warning'
                    className='absolute w-5 h-5 right-[-25px] top-1/2 transform -translate-y-1/2'
                  />
                )}
              </div>

              <p className='font-light'>
                Must comply with Georgian mobile number format
              </p>
            </div>

            {/* Submit Button */}
            <div className='flex justify-end'>
              <button
                onClick={() => setIsSubmitted(true)}
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

        <div className='flex items-center bg-white mt-[68px] ml-[50px]'>
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
              className='mt-[670px] w-[42px] h-[42px]'
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
  );
}
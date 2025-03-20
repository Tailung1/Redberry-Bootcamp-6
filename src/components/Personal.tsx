import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import IMask from "imask";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define validation schema using Yup
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(
        /^\+995\s\d{3}\s\d{2}\s\d{2}\s\d{2}/,
        "Phone number is invalid"
      )
      .required("Phone number is required"),
    image: yup.mixed().required("Image is required"),
  })
  .required();

const Form = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    image: null,
  });

  const { control, handleSubmit, setValue, formState, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange", // Ensure validation runs on change
    });

  const { errors, isValid } = formState;

  // LocalStorage handling
  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // Save form data to localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  // Handle "Next" button click (validation check)
  const handleNext = async () => {
    const isValidPage = await trigger(); // Trigger validation before moving to the next page
    if (isValidPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className='w-full max-w-md mx-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentPage === 0 && (
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='name'
            >
              Name
            </label>
            <Controller
              name='name'
              control={control}
              defaultValue={formData.name}
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  id='name'
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.name && (
              <p className='text-red-500 text-sm'>
                {errors.name.message}
              </p>
            )}
          </div>
        )}

        {currentPage === 0 && (
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='email'
            >
              Email
            </label>
            <Controller
              name='email'
              control={control}
              defaultValue={formData.email}
              render={({ field }) => (
                <input
                  {...field}
                  type='email'
                  id='email'
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
              )}
            />
            {errors.email && (
              <p className='text-red-500 text-sm'>
                {errors.email.message}
              </p>
            )}
          </div>
        )}

        {currentPage === 0 && (
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='phone'
            >
              Phone
            </label>
            <Controller
              name='phone'
              control={control}
              defaultValue={formData.phone}
              render={({ field }) => (
                <input
                  {...field}
                  type='text'
                  id='phone'
                  className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  onInput={(e: any) => {
                    const maskedPhone = IMask(e.target, {
                      mask: "+995 000 00 00 00",
                    });
                    field.onChange(maskedPhone.value);
                  }}
                />
              )}
            />
            {errors.phone && (
              <p className='text-red-500 text-sm'>
                {errors.phone.message}
              </p>
            )}
          </div>
        )}

        {currentPage === 1 && (
          <div className='mb-4'>
            <label
              className='block text-sm font-medium text-gray-700'
              htmlFor='image'
            >
              Image
            </label>
            <Controller
              name='image'
              control={control}
              defaultValue={formData.image}
              render={({ field }) => (
                <input
                  {...field}
                  type='file'
                  id='image'
                  className='mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                  onChange={(e: any) => {
                    setFormData({
                      ...formData,
                      image: e.target.files[0],
                    });
                  }}
                />
              )}
            />
            {errors.image && (
              <p className='text-red-500 text-sm'>
                {errors.image.message}
              </p>
            )}
          </div>
        )}

        <div className='flex justify-between'>
          {currentPage > 0 && (
            <button
              type='button'
              onClick={handlePrevious}
              className='px-4 py-2 bg-gray-300 text-gray-700 rounded-md'
            >
              Previous
            </button>
          )}

          {currentPage < 1 ? (
            <button
              type='button'
              onClick={handleNext}
              className={`px-4 py-2 ${
                isValid ? "bg-blue-500" : "bg-gray-300"
              } text-white rounded-md`}
              disabled={!isValid}
            >
              Next
            </button>
          ) : (
            <button
              type='submit'
              className='px-4 py-2 bg-green-500 text-white rounded-md'
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;

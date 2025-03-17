import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField";
import UploadPhoto from "../components/UploadPhoto"; // New component
import arrowIMG from "../assets/arrow.svg";
import atIMG from "../assets/at.svg";
import phoneIMG from "../assets/phone.svg";
import starIMG from "../assets/star.png";

export default function Personal() {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [image, setImage] = useState<null | string>(null);

  const { register, handleSubmit, watch } = useForm();
  const { name, lastname, optional, email, number } = watch();

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  //   const nextPage = () => {
  //     const paths = ["/", "/Personal/experince"];
  //     navigate(paths[page]);
  //   };

  return (
    <div className='flex'>
      <div className='bg-[#F9F9F9] flex flex-col w-1/2 p-5'>
        <div className='flex w-full items-center space-x-4'>
          <img
            onClick={() => navigate("/")}
            className='cursor-pointer'
            src={arrowIMG}
            alt='Back'
          />
          <div className='flex flex-col gap-[15px] w-full'>
            <div className='flex justify-between'>
              <h2>Personal Info</h2>
              <p>{page}/3</p>
            </div>
            <hr />
          </div>
        </div>

        <div className='mt-[30px] pl-[55px] pr-[14]'>
          <form className='flex flex-col gap-[35px] w-full'>
            <div className='flex w-full gap-[24px]'>
              <InputField
                label='Name'
                register={register}
                id='name'
                placeholder='chicha'
                errorMessage='Min. 2 Georgian Letters'
              />
              <InputField
                label='LastName'
                register={register}
                id='lastname'
                placeholder='chicha'
                errorMessage='Min. 2 Georgian Letters'
              />
            </div>

            <UploadPhoto
              register={register}
              onChange={handleImageChange}
            />

            <InputField
              label='About me (Optional)'
              register={register}
              id='optional'
              placeholder='General Info about you'
            />

            <InputField
              label='Email'
              register={register}
              id='email'
              placeholder='anzorr666@redberry.ge'
              errorMessage='Must end with @redberry.ge'
            />
            <InputField
              label='Mobile Number'
              register={register}
              id='number'
              placeholder='+995 551 12 34 56'
              errorMessage='Must comply with the Georgian mobile number format'
            />
          </form>
        </div>

        <div className='flex justify-end'>
          <button
            onClick={() => navigate("/personal/experince")}
            className='bg-[#6B40E3] px-[60px] py-[10px] text-[16px] text-white rounded-[4px] mt-[100px] w-[30px] flex justify-center'
          >
            Next
          </button>
        </div>
      </div>

      <div className='bg-white p-4'>
        <div className='flex items-center mt-[68px] ml-[80px]'>
          <div className='flex relative flex-col gap-[20px]'>
            <div className='text-[34px] leading-normal flex gap-[10px] text-[#F93B1D] h-[40px]'>
              <span>{name}</span> <span>{lastname}</span>
            </div>
            <div className='h-[20px]'>
              {" "}
              {email && (
                <div className='flex gap-[10px]'>
                  <img src={atIMG} alt='Email' /> {email}
                </div>
              )}
            </div>
            <div className='h-[35px]'>
              {number && (
                <div className='flex gap-[10px]'>
                  <img src={phoneIMG} alt='Phone' /> {number}
                </div>
              )}
            </div>

            <div className='h-[40px]'>
              {" "}
              {optional && (
                <div>
                  <p className='text-[#F93B1D] text-[18px] mb-[10px]'>
                    About me
                  </p>
                  <p className='block max-w-[300px] break-words'>
                    {optional}
                  </p>
                </div>
              )}
            </div>

            <img
              className='mt-[450px] w-[42px] h-[42px]'
              src={starIMG}
              alt='Star'
            />
          </div>
          {image && (
            <img
              src={image}
              alt='Uploaded'
              className=' absolute right-20 top-20 w-[200px] h-[200px] object-cover rounded-full'
            />
          )}
        </div>
      </div>
    </div>
  );
}

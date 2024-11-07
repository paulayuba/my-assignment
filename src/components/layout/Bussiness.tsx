import React from 'react';
import { IoIosStarHalf } from "react-icons/io";

const Bussiness = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start px-6 py-10">
      {/* Left Side */}
      <div className="px-32 md:w-1/2 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Elevate Your Business with Our <br /> Expertise
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Discover innovative solutions tailored to your business <br /> needs. Partner with us and unlock your company's <br /> potential for growth and success.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="text-black border-2 border-gray-600 py-3 px-6 rounded-md focus:outline-none">
            Explore Our Services
          </button>
          <button className="border bg-[#EF2AB2] text-white  py-3 px-6 rounded-lg focus:outline-none">
            Join Us Today
          </button>
        </div>
        <div className="flex gap-10 mt-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">2.5k+</h1>
            <p className="text-gray-600">Over 1,000 satisfied clients <br /> <span className='flex items-start'>worldwide</span></p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl flex font-bold text-black">5.0 <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_114)">
            <path d="M17.421 27.5505C16.8527 27.2158 16.1473 27.2158 15.579 27.5505L8.72646 31.5837C7.38202 32.3751 5.73143 31.2146 6.02104 29.6817L7.603 21.3086C7.71612 20.7099 7.52142 20.0943 7.08455 19.6696L1.05219 13.8042C-0.0398643 12.7424 0.58189 10.8889 2.09335 10.7004L10.0889 9.70325C10.7238 9.62408 11.2701 9.21671 11.5271 8.63087L14.8371 1.08611C15.4726 -0.362359 17.5274 -0.362361 18.1629 1.0861L21.4729 8.63086C21.7299 9.21671 22.2762 9.62408 22.911 9.70325L30.9066 10.7004C32.4181 10.8889 33.0399 12.7424 31.9478 13.8042L25.9154 19.6696C25.4785 20.0943 25.2839 20.7099 25.397 21.3086L26.979 29.6817C27.2686 31.2146 25.618 32.3751 24.2736 31.5837L17.421 27.5505Z" fill="#FB923C"/>
            <path d="M17.9968 26.5724C17.073 26.0286 15.927 26.0286 15.0032 26.5724L8.15077 30.6057C7.64661 30.9024 7.02764 30.4672 7.13624 29.8924L8.7182 21.5192C8.90202 20.5463 8.58562 19.546 7.87573 18.8558L1.84336 12.9905C1.43384 12.5923 1.667 11.8973 2.2338 11.8265L10.2294 10.8294C11.261 10.7008 12.1488 10.0388 12.5664 9.08679L15.8764 1.54202C16.1147 0.998848 16.8853 0.998852 17.1236 1.54202L20.4336 9.08679C20.8512 10.0388 21.7391 10.7008 22.7706 10.8294L30.7663 11.8265C31.333 11.8973 31.5662 12.5923 31.1567 12.9905L25.1243 18.8558C24.4144 19.546 24.098 20.5463 24.2819 21.5192L25.8638 29.8924C25.9723 30.4672 25.3534 30.9024 24.8492 30.6057L17.9968 26.5724Z" stroke="#0D0D0D" stroke-opacity="0.18" stroke-width="2"/>
            </g>
            <defs>
            <clipPath id="clip0_1_114">
            <rect x="0.5" width="32" height="32" rx="1.6" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            </h2>
            <p className="text-gray-600">Rated 4.9 out of 5 by users</p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="px-20 rounded-md md:w-1/2 flex justify-center">
        <img
          src="https://s3-alpha-sig.figma.com/img/3e2a/033b/d5bfb15c655e295f1fb37e9d8fc33e29?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMdfjBL7zPO6fXOd1vBou-vcpNUXI~3-GUn36YifpC4sZIePSr6Lz1DV7~SrydoFqYSKekjSiE-bGtZEqTbN76AVmOeXg6rhcU9ay2WDPZjbeC1l0hjzhPBdRRPKy0U6x66BACWkHqcJjFmRc7AZXLn79GE7u5Z9FSctgNbQOdnRA7BQRj-mUVs5CstSVA7ILabMKMvi9uaVRUU755hHVSfACtwOZds9isLmMMugBj7sEqCbcjKakqC-KiErZ72hxKKoL59a7x5dBQRT2EAAFurOKgcXzmfNPlI-vmpsroODjy-5X4L9ZQS4Aqq9Umhx0p3NwK-~nl6qXv6zW5DsyQ__"
          alt="Business Image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Bussiness;

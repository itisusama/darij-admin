import React from "react";
import Profile from "../../assets/Profile.png";
import profileCamera from "../../assets/profilecamra.svg";

const My_Profile = () => {
  return (
    <section className="overflow-y-auto h-screen custom-scrollbar">
    <div className="p-4 border border-gray-300 h-[500px] rounded-3xl relative">
      <div className="flex">
        <div>
          <img src={Profile} alt="" className="h-[160px] w-[160px]" />
        </div>
        <div className=" bg-black h-10 w-10 border rounded-full border-white flex justify-center items-center absolute ml-[110px] mt-[100px]">
          <img src={profileCamera} alt="" className="" />
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        <div className=" w-[50%]">
          <label htmlFor="firstName" className="text-[#000000]">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            placeholder="Enter your first name"
          />
        </div>
        <div className="w-[49%]">
          <label htmlFor="firstName" className="text-[#000000]">
            Last Name
          </label>
          <input
            type="text"
            id="LastName"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-yellow-500"
            placeholder="Enter your Last name"
          />
        </div>
      </div>
      <div>
        <div className="mt-5 w-[50%]">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-yellow-500 focus:ring-1"
          />
        </div>
      </div>
      <div className="absolute bottom-8 right-4">
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full hover:bg-yellow-500 w-[210px] ">
            Update
          </button>
        </div>
    </div>
    <div className="mb-44"></div>
    </section>
  );
};

export default My_Profile;

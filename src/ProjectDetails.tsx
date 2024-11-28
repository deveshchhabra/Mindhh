


import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "./SvgImages/Calender";

export const ProjectDetails = () => {
  const [StartDate, setStartDate] = useState(null);
  const [EndDate, setEndDate] = useState(null);
  const [Error, setError] = useState("");
  const [SelectedBox, setSelectedBox] = useState("");
  const handleEndDateChange=(date)=>{
    if(StartDate && date<StartDate){
      setError("Data is not valid ")
      setEndDate(null)
    }
    else{
      setError("")
      setEndDate(date);
    }
  }

  return (
    <>
      <h1 className="font-bold text-black text-2xl rounded-lg mb-4 pb-2 bottom-2">Project Details</h1>

      {/* Project Name */}
      <div className="relative pb-2 w-full flex">
        <input type="text" id="project"
        className="peer px-3 py-2 w-full rounded-md border-0 border-b-2 focus-ring-0
        focus:bg-white focus:outline outline-blue-300"
        placeholder="" />
        <label htmlFor="project" className="text-gray-500 absolute text-sm  bg-white left-3 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-400 transition-all">Project Name</label>
       
      </div>

      {/* Client Name and Email */}
      <div className="flex justify-between w-full my-4">
      <div className="relative w-[40%] m-2">
  <input
    type="text"
    id="Name"
    className="peer px-3 py-2 w-full rounded-lg border-0 border-b-2 focus:ring-0  focus:bg-white focus:outline outline-blue-300 "
    placeholder=""
  />
  <label
    htmlFor="Name"
    className="text-gray-500 absolute text-sm  bg-white left-3 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 transition-all duration-300 ease-in-out"
  >
    Client Name
  </label>
</div>

       


        <div className="relative w-[40%] m-2">
  <input
    type="email"
    id="email"
    className="peer px-3 py-2 w-full rounded-lg border-0 border-b-2 focus:ring-0  focus:bg-white focus:outline outline-blue-300 "
    placeholder=""
  />
  <label
    htmlFor="email"
    className="text-gray-500 absolute text-sm  bg-white left-3 top-1/2 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 transition-all duration-300 ease-in-out outline-blue-300 "
  >
    Client Email
  </label>
</div>

      </div>
    


    <div className="flex justify-between w-full z-30">
      <div className="flex relative rounded-lg w-2/5  ml-2 border-b-2 ">
        {/* DatePicker container */}
        <div className=" relative flex items-center w-full p-1 focus:outline outline-blue-300 ">
          <DatePicker
            id="Name"
            selected={StartDate}
            onChange={(date) => setStartDate(date)}
            className="hover:outline outline-blue-300  px-3 py-2  w-[100%] rounded-lg border-0 focus:ring-0 focus:bg-white "  
          />
    <div  htmlFor="Name" className="absolute right-3 p-2 top-1"><Calender /></div>
          <label
            htmlFor="Name"
            className={`text-gray-500 absolute text-sm bg-white left-3 transition-all duration-300 ease-in-out   ${
              StartDate
                ? "-top-1 text-xs text-blue-500"
                : "top-1/2 transform -translate-y-1/2"
            }`}
          >
            Start Date
          </label>
        </div>
      </div>
      <div className="relative flex   rounded-ld w-[40%] pl-2">
      <div className="relative flex items-center w-full border-b-2">
      
      <DatePicker id="datePicker"
      className="px-3 py-2 w-full  rounded-lg border-0 focus:ring-0 focus:bg-white focus:outline outline-blue-300"
          
      placeholderText=""  selected={EndDate} onChange={handleEndDateChange}
      minDate={StartDate ||new Date()}
      disabled={!StartDate}

      />
       <div className="absolute right-3 top-1 p-2"><Calender /></div> 
      </div>
       <label htmlFor="datePicker" className={`text-gray-500 absolute text-sm bg-white left-3 transition-all duration-300 ease-in-out   ${
              EndDate
                ? "-top-1 text-xs text-blue-500"
                : "top-1/2 transform -translate-y-1/2"
            }`}>End DATE</label>
      </div>
    </div>
 



   
    <div className="flex justify-between w-full py-2 my-2 ml-2 ">
      <div className="relative rounded-lg border-0 border-b-2 w-2/5 flex">
        <select
          id="serviceType"
          className="peer w-full text-gray-500 hover:outline outline-blue-300 focus:outline rounded-lg px-3 py-3"
        >
          <option value="ServiceType" disabled selected>
            Service Type
          </option>
          <option value="Development">Development</option>
          <option value="Consulting">Consulting</option>
          <option value="Support">Support</option>
        </select>
        <label className="absolute bg-white text-gray-500  left-3 top-1/2 p-2 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 transition-all duration-300 ease-in-out">Service Type</label>
        </div>
        <div className="relative rounded-lg border-0 border-b-2 w-2/5 flex">
        <select
          id="serviceType"
          className="peer w-full text-gray-500 hover:outline outline-blue-300 focus:outline rounded-lg px-3 py-3"
        >
          <option value="ServiceType" disabled selected>
            Service Type
          </option>
          <option value="Development">Development</option>
          <option value="Consulting">Consulting</option>
          <option value="Support">Support</option>
        </select>
        <label className="absolute bg-white text-gray-500  left-3 top-1/2 p-2 transform -translate-y-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500 transition-all duration-300 ease-in-out">Service Type</label>
        </div>

        

        </div>


    </>
  );
};

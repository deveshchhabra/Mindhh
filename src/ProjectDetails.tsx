// import { useState } from "react";
import DropDown from "./SvgImages/dropDown";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Calender from "./SvgImages/Calender";
export const ProjectDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(startDate);
  return (
    <>
      <h1 className='font-bold  text-black text-3xl rounded-lg '>Project Details</h1>
      <div className=''>
        <label className='block text-gray-500 mb-2  pt-2 mt-2  ' htmlFor='Project Name'>
          Project Name
        </label>
        <input
          className='py-2 block text-black hover:outline w-full  outline-gray-400 border-0 border-b-2   rounded-lg '
          id='ProjectName'
          type='text'
          placeholder='ProjectName'
        ></input>
      </div>
      <div className='flex justify-between w-full'>
        <div className='mb-2  pt-2 mt-2 w-2/5 '>
          <label className='block  text-gray-500 mb-2' htmlFor='Client Name'>
            Client Name
          </label>
          <input
        
            className='block rounded-lg py-2 focus:outline-none  hover:outline  outline-gray-400 border-0 border-b-2  w-[100%]  '
            id='ClientName'
            type='text'
            placeholder='Name'
          ></input>
        </div>
        <div className='mb-2  pt-2 mt-2 w-2/5'>
        <label htmlFor="email" className="block mb-2  text-gray-500 ">Client Email</label>
        <input type="email" id="email" className="block rounded-lg py-2 focus:outline-none  hover:outline  w-full outline-gray-400 border-0 border-b-2" placeholder="john.doe@company.com"  />
         
        </div>
      </div>
      

  
  {/* <span className="mx-4 text-gray-500">to</span> */}

  <div className='flex justify-between w-full py-6 '>
  <div className='flex  flex-wrap mb-2  pt-2 mt-2 w-2/5 border-0 border-b-2 rounded '>
  <DatePicker className="outline-none" selected={startDate} onChange={(date) => setStartDate(date)} />
    <Calender />
    </div>
    <div className='flex mb-2  pt-2 mt-2 w-2/5 border-0 border-b-2 '>
  <DatePicker className="outline-none" selected={EndDate} onChange={(date) => setStartDate(date)} />
    <Calender />
    </div>
</div>

  <div className='flex justify-between w-full py-6 '>
  <select
          id='department'
          className=' block border-0 border-b-2 w-2/5 text-gray-500  hover:outline  mb-2 outline-gray-400 focus:outline-none  rounded-lg ' 
        >
          <option  className='p-2 mb-2 m-2   space-x-2 whitespace-pre' value='Department'  disabled selected>
            Service type
          </option>
          <option>Depatement</option>
          <option>IT</option>
          <option>Security</option>
        </select> 
      
        <select
          id='department'
          className=' block border-0 border-b-2 w-2/5 text-gray-500  hover:outline  outline-gray-400 focus:outline-none  rounded-lg ' 
        >
          <option  className='pt-2 mb-2 mt-2   space-x-2 whitespace-pre' value='Department'  disabled selected>
            Department
          </option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>QA</option>
        </select> 
      </div>
    


      </>



  )
}

export const ProjectDetails = () => {
  return (
    <form className=''>
      <h1 className='font-bold  text-black text-3xl rounded-lg'>Project Details</h1>
      <div className='pt-2 mt-2 mb-5'>
        <label className='block text-gray-500 mb-2  ' htmlFor='Project Name'>
          Project Name
        </label>
        <input
          className='py-2 block text-black hover:outline w-full  outline-gray-400 border-0 border-b-2   rounded-lg '
          id='ProjectName'
          type='text'
          placeholder='ProjectName'
        ></input>
      </div>
      <div className='py-2  flex justify-between w-[80%] mb-5'>
        <div className='mb-2'>
          <label className='block  text-gray-500' htmlFor='Client Name'>
            Client Name
          </label>
          <input
            className='block rounded-lg py-2 focus:outline-none  hover:outline  outline-gray-400 border-0 border-b-2  '
            id='ClientName'
            type='text'
            placeholder='Name'
          ></input>
        </div>
        <div className='mb-5 ml-6  '>
          <label className='block  mb-2 text-gray-500' htmlFor='ClientEmail'>
            Client Email
          </label>
          <input
            className='block  border-0 border-b-2  rounded-lg py-2 hover:outline focus:outline-none  outline-gray-400  '
            id='ClientName'
            type='email'
            placeholder='@gmail.com'
          ></input>
         
        </div>
      </div>
      <div className='flex justify-between w-[75%] mb-5 p-2'>
        <div className='mb-2'>
          <label className='block  text-gray-500'  htmlFor='Client Name'>
            Starting Date
          </label>
          <input
            className='block focus:outline-none  hover:outline  outline-gray-400 border-0 border-b-2 rounded-lg py-2  '
            id='ClientName'
            type='date'
            placeholder='Name'
          ></input>
        </div>
        <div className='mb-4 ml-6  '>
          <label className='block   mb-2 text-gray-500 ' htmlFor='ClientEmail'>
            Ending Date
          </label>
          <input
            className='block  border-0 border-b-2  hover:outline focus:outline-none  outline-gray-400  rounded-lg py-2 '
            id='ClientName'
            type='date'
            placeholder='@gmail.com'
          ></input>
         
        </div>
      </div>
      
       
        
      <div className='flex justify-between w-[80%] '>
       
     
        <select
          id='department'
          className='block border-0 border-b-2 text-gray-500  hover:outline  outline-gray-400 focus:outline-none  rounded-lg py-2 ' 
        >
          <option className='p-2 m-2' value='Dep' disabled selected>
            Department    .....................   
          </option>
          <option value='IT'>IT</option>
          <option value='HR'>HR</option>
          <option value='OTHERS'>OTHERS</option>
        </select>

       
        <select
          className='  block border-0 border-b-2  text-gray-500   rounded-lg py-2 hover:outline  outline-gray-400 '
          id='service-type'
        >
          <option disabled selected>
            Service-Type....................
          </option>
          <option>Canada</option>
          <option>France</option>
          <option>Germany</option>
        </select>
      </div>
    </form>

  )
}

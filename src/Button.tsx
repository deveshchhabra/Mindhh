
import { useState } from 'react'

const AutoFixer = () => {


  const [Menue, setMenue] = useState(false)
  
  

  return (
    <div className='flex-wrap-reverse'>
    
        <h1 className='text-gray-700'></h1>

        
        {/*  */}
        <div className='flex  m-2 pl-7 justify-self-end flex-wrap'>
       
        <button
         className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow " 
          onFocus={() => setMenue(true)}
          onBlur={() => setMenue(false)}
          >

<div className="flex pl-2">
             <h1 className=" text-blue-950 size-1 text-xl  ">+</h1>
            <div className=" pl-2 ml-2 text-gray-400">Add/Create new task</div>
            </div>
        </button>
       
           
        </div>


        {Menue ? (
          <div className='card absolute scrollbar-thin border border-black scrollbar-track-slate-50  scrollbar-thumb-slate-200 max-h-52   w-[30%] bg-white'>
            <form>
         <input type='text' 
         placeholder="Enter the task here" 
         onMouseDown={e => e.preventDefault()}
        onClick={() => {
          setMenue(true)}}/>
      </form>  
                
            
          </div>
        ) : null}
        </div>

  )
}

export default AutoFixer

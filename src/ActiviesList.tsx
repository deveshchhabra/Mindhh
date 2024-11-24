
const ActiviesList = () => {
  return (
    <div>
    <div className="border-0 border-b-2 border-gray-200  border-dashed p-3 mx-5 ">
    </div>

     <h2 className="font-bold  pl-2 m-2">  Activities</h2>
    <div className='h-[60%] w-full pl-6  flex rounded-lg align-middle  '>
      {/* " focus:outline-none pl-2" */}
    
    <img
            className='rounded-full w-12 h-12 m-0   border-gray-400 border-2'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
          ></img>
          <div className="block"> 

          <div className="pl-4 flex">
            <div>Darlene Robertson  </div>
            <div className="text-gray-400 pl-4"> 8hrs ago</div></div>
          <div className="text-gray-400 p-2  ml-4">Oct 10,2024 at 10:30 AM</div>
          <div className="flex items-center gap-2 ">
            <input type="checkbox" className="peer w-5 h-5  border-gray-500 rounded-lg bg-cyan-400"
            id="checkbox" />
            <label htmlFor="checkbox " className="text-gray-400  peer-checked:line-through" >GridSystem</label>
             </div>
          </div>

    </div>
   
    </div>

  )
}

export default ActiviesList

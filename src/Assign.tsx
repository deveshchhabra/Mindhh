import React, { useEffect, useState } from 'react'
import Data from './constants/Data1.json'
const Assign = () => {
    const [Name, setNames] = useState([]);
    const [buttonName, setbuttonName] = useState("");
    const [ShowAll, setShowAll] = useState(false);
    useEffect(() => {
        setNames(Data);
    }, []);
    const addItems=()=>{
        const newItems={id:Name.length,name:buttonName};
        console.log(Name)
        setNames([...Name,newItems]);
        setbuttonName("");

    }
   const DeleteItem=(id)=>{
    const DeleteData=Name.filter((item)=>item.id!==id)
    setNames(DeleteData)
   }
    const handleChange=(e)=>{
        setbuttonName(e.target.value)
    }
    const toggleShowAll=()=>{
             setShowAll((prev)=>!prev);
           }
  return (
    <>
  <h1 className=' my-4 text-gray-500 mb-2  pt-2 mt-2 '>Assignee</h1>
    <div className='flex  justify-between'>
      <div className='flex  b-2 z-30 '>
  {!ShowAll &&
    Name.length <4?
   ( Name.map((data)=> (data.name !==null && data.name !=="" && <div className='border-0  z-30' key={data.id}>
      <div className="flex flex-row w-full items-center    border-gray-00 bg-gray-100 rounded-full m-1  "  key={data.id}>
      <img className="w-8 h-8 mr-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" alt="Jese image"></img>
      <div className='pl-1 mx-2'>{data.name}</div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
     <button className="text-sm mx-2 text-gray-700 "    onClick={() => DeleteItem(data.id)}>X</button>
  </div>

  </div>
    </div>)))
:(<div className='flex'>
{Name.slice(0,3).map((data)=>
<>
       <img
     key={data.id}
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s"
     alt="Avatar"
     className={`w-10 h-10 rounded-full outline outline-1 outline-gray-500 ${
       data.id === 3 ? "-ml-4 z-30" : data.id === 2 ? "-ml-5 z-20" : "z-10 -ml-3"
     }`}
   />
   
   </>
    )
}
{Name.length!=="" &&!ShowAll?<button className="text-xl  ml-2 cursor-pointer text-gray-500 pl-2" onClick={toggleShowAll}>
                 {`${Name.length-1}+`}  items & more click here
               </button>:<button className="text-xl  ml-2 cursor-pointer text-gray-500 pl-2" onClick={toggleShowAll}>
                 {`${Name.length-1 }+`} items & close here 
               </button>
 }

</div> )
    }  
    
    {
  ShowAll ? 
   <div className='card absolute  max-h-full m-16  bg-white z-30  border-2 w-[20%] border-gray-300  grid grid-col-2 justify-between scrollbar-thin scrollbar-track-slate-50 scrollbar-thumb-slate-200 rounded-md'>


{
    Name.map((data)=> (data.name !==null && data.name !=="" && <div className='border-0  ' key={data.id}>
      <div className="flex flex-row w-full items-center    border-gray-00  rounded-full m-1  "  key={data.id}>
      <img className="w-8 h-8 mr-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" alt="Jese image"></img>
      <div className='pl-1 mx-2'>{data.name}</div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
     <button className="text-sm mx-2 text-gray-700 "    onClick={() => DeleteItem(data.id)}>X</button>
  </div>

  </div>
    </div>))}

   </div>
   
      
      :null}
    
         </div>

      
         <div className=' flex  '>

             <input  onChange={handleChange} className='outline-0 w-20 mb-2' value={buttonName}/>
             <button onClick={addItems}  className='rounded-full w-10 h-10   border-gray-300 border-2  text-xl     ...'>+</button>
          
         </div>
       </div>
       </>
   )
 }

export default Assign 

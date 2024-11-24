import React, { useEffect, useState } from 'react'
import Data from './costants/Data1.json'
const Assign = () => {
    const [Name, setNames] = useState([]);
    const [buttonName, setbuttonName] = useState("");
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
  return (
    <>
  <h1 className=' my-4 text-gray-500 '>Assignee</h1>
    <div className='flex  '>
      <div className='flex  b-2 pt-2 '>
  {
    Name.length <4?
    Name.map((data)=> (data.name !== "" && <div className='border-0  ' key={data.id+1}>
      <div className="flex flex-row w-full items-center    border-gray-00 bg-gray-100 rounded-full m-1  ">
      <img className="w-8 h-8 mr-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" alt="Jese image"></img>
      <div className='pl-1 mx-2'>{data.name}</div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
     <button className="text-sm mx-2 text-gray-700 "    onClick={() => DeleteItem(data.id)}>X</button>
  </div>

  </div>
    </div>))
:<>
<div className="relative w-8 h-8">
  <img className=" top-0 left-0 w-8 h-8 object-cover rounded-full" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" 
       alt="Jese image"/>
  <img className=" top-0 left-0 w-8 h-8 object-cover rounded-full opacity-75" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" 
       alt="Jese image"/>
</div>



  
</>
  }
      </div>

      
        <div className=' flex p-2  '>

            <input  onChange={handleChange} className='outline-0 w-20 mb-2' value={buttonName}/>
            <button onClick={addItems}  className='rounded-full w-10 h-10   border-gray-300 border-2  text-xl     ...'>+</button>
            
        </div>
      </div>
      </>
  )
}

export default Assign







import { useEffect, useState } from 'react';
import  Data  from './costants/Data2.json'
import TasklistCard from './TasklistCard';
import ImageComponent from './SvgImages/ImageComponent';

const TaskList = () => {
  const [Items, setItems] = useState([]);




  useEffect(() => {
    setItems(Data);
}, []);
  return (
    <>

    <h1 className='font-bold my-2 py-2 text-2xl'> Task List</h1>
  
   {Items.map((data)=>{
    return (
      <> 
      {/* place-content-between */}
       <div className="border border-gray-200 shadow border-solid rounded-lg  w-full h-30 grid grid-cols-2 gap-4  mb-4 p-2  text-xs " key={data.id}>
      <div  className="flex p-2">
      <ImageComponent/>
      <div className='pl-2 px-2'>{data.name}</div>        
        </div>
<div>
    <div className="flex flex-row-reverse" >      
      <TasklistCard/>
      </div>
</div>
      <div  className="p-2  flex">
      <img
            className='rounded-full w-12 h-12 m-0   border-gray-400 border-2'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
          ></img>
          <div className="text-gray-500 pl-2 m-2"> Oct 9 to 12 Oct</div>
        
          </div>
          <div  className="p-2 flex flex-row-reverse m-2">5+ Stack</div>
     
      </div>
      </>
      )})}
      </>
  )
}
     


  
   

export default TaskList

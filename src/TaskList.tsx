import React, { useEffect, useState } from 'react'
import Data from './constants/Data2.json'
import TasklistCard from './TasklistCard'
import ImageComponent from './SvgImages/ImageComponent'
const TaskList = () => {
  const [Items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  const getColor=(level)=>{
    if(level=='low'){
     return 'bg-red-100 text-red-500'
    }   
    else if(level=='mid'){
     return 'bg-yellow-100 text-yellow-500'
    }
    else{
     return 'bg-green-100 text-green-500'
    }
   }
   const handleDelete = (id) => {
    setItems(Items.filter((item) => item.id !== id));
  };

  const handleUpdateItem = (id, updatedName) => {
    setItems(
      Items.map((data) =>
        data.id === id ? { ...data, name: updatedName } : data
      )
    );
    setEditingId(null); // Exit edit mode
    setNewName(""); // Clear the input box
  };

  useEffect(() => {
    
   setItems(Data);
  }, []);
  return (
  
    <>
    <h1 className='font-bold text-2xl mb-4'>Task List </h1>
    {
      Items.map((data)=>{
        
        return (
          <>
          <div className='grid grid-cols-2 w-full  rounded-lg p-1 h-28 px-2 mb-4 gap-4  place-content-between outline outline-gray-200 text-xs'>
            <div className='block'>
           <div className='flex  '>
<ImageComponent/>
            {editingId === data.id ? (
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Edit name"
            />
          ) : (
           <div className='pl-2'>{data.name}</div>
          )}
          </div>
            <div className={`ml-8 pl-2 rounded ${getColor(data.level)} w-10`} >{data.level}</div>
          </div>

        <div>
        <div  className=' flex flex-row-reverse '> 
     <TasklistCard   data={data}
                  isEditing={editingId === data.id}
                  setEditingId={setEditingId}
                  newName={newName}
                  setNewName={setNewName}
                  onSave={handleUpdateItem}
                  onEditingId={editingId}
                  onDelete={handleDelete}
                  />
         </div> </div>
         <div className='p-2 flex '>
   <img
  className='rounded-full w-10 h-10 m-0   border-gray-400 border-2'
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s"
  ></img>
     <div className="text-gray-500 pl-2 m-2"> Oct 9 to 12 Oct</div> 
    </div>
  
         <div className='p-2 flex flex-row-reverse mt-2'>5+ Stack </div>
 </div>
        
         
         
  
         

  
       

  
         </>
         )
       })
     }
        
     </>
      
     ) 
 }

 export default TaskList




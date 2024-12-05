import { useState } from "react"
import ImageComponent from "./SvgImages/ImageComponent";
import Delete from "./SvgImages/Delete";
import Edit from "./SvgImages/Edit";
import DeleteIcon from "./SvgImages/Delete";
import Done from "./SvgImages/Done";
import Doing from "./SvgImages/DOing"
import Todo from "./SvgImages/Todo";

const TasklistCard = ({ data, onStatusChange, onDelete,   isEditing,setEditingId, newName,setNewName,onSave}) => {
  const {id,status}=data;
  const [isHovered, setIsHovered] = useState(false); // For hover
  const [isClicked, setIsClicked] = useState(false); // For click toggle
  const handleEditClick = () => {
    setEditingId(data.id); // Set this item as being edited
    setNewName(data.name); // Populate input with the current name
  };

  const handleSaveClick = () => {
    onSave(data.id, newName); // Save changes via parent callback
  };

  const handleCancelClick = () => {
    setEditingId(null); // Cancel edit mode
    setNewName(""); // Clear the input box
  };
  const [isSelected, setIsSelected] = useState(true);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };
  const [Menue, setMenue] = useState(false);
  return (
    <div className='flex ' key={data.id}>
    {/*  */}
    <button
     className=" hover:bg-gray-100 text-lg  font-semibold mr-8 ease-in-out " 
      onFocus={() => setMenue(true)}
      onBlur={() => setMenue(false)}
      >
        ⋮
    </button>
   
       

<div className="flex flex-row-reverse " onMouseDown={e => e.preventDefault()}>

    {Menue ? (

<div className='z-10 absolute scrollbar-thin border  border-gray-200 shadow    scrollbar-thumb-slate-200      mr-5  bg-white rounded-lg scroll-m-0 w-36 ' >  

<label key="Todo" className="cursor-pointer pl-6"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true);
                
              }}>      
          
       

   <div className="flex items-center p-4"  onClick={() => {
                onStatusChange(id, "Todo");
           
                setMenue(true);
                handleClick();
              }} >
          
    
              <div onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}><Todo isSelected={isSelected}/></div>
              <p className="text-xs pl-2 "  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}>ToDo</p>
          </div>
       
      </label>

      <label key="doing" className="cursor-pointer"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true)}} >
        <input type="radio" className="peer sr-only" name="pricing" />
        <div className=" rounded-md bg-white  text-green-200 peer-checked:text-green-600  peer-checked:ring-offset-2">
          
             
        <div
      className="pl-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)} // Add hover effect
      onMouseLeave={() => setIsHovered(false)} // Remove hover effect
      onClick={() => setIsClicked(!isClicked)
      } // Toggle click effect
    >
  
          
              <div   className="text-xs flex pl-2"   onClick={() => {
                onStatusChange(id, "Doing");}}
           
              
              ><Doing isHovered={isHovered} isClicked={isClicked}/>
              <div className="text-xs text-black pl-2"  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}>Doing</div>
          </div>
          </div>
          </div>
      </label>
  
      <label key="done" className="cursor-pointer"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true)}} >
        <input type="radio" className="peer sr-only" name="pricing" />
        <div className=" rounded-md bg-white  text-green-200 peer-checked:text-green-600  ">
          
          
   <div className="flex items-center p-4"  onMouseDown={e => e.preventDefault()}
             
             onClick={() => {
                onStatusChange(id, "Done");
                setMenue(true);
              }}
               >
          
              <div   className="text-xs flex"   >
                <div><Done/></div>
              <div className="text-xs text-black pl-2"  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}>Done</div>
              </div>
          </div>
          </div>
      </label>
      <div className="flex items-center pl-5">
      {isEditing ? (
        <>
          <button className="pr-2 mr-2" onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <button  className=" items-center   text-xs  w-[35%] grid grid-cols-2" onClick={handleEditClick}>
         <Edit/> 
          <span className="pl-2">Edit</span>
          </button>
      )}
      
        </div>
       
      
   <div className=" pl-4 py-5  ">
       
<button
              className="flex items-center w-[55%]  text-xs left-4"
              onClick={() => onDelete(id)}
            >
              <Delete />
              <span className="ml-2">Delete</span>
            </button>
        </div>
      </div>
    ) : null}
    </div>
</div>

    
  )
}

export default TasklistCard


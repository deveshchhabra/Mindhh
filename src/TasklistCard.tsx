import { useState } from "react"
import ImageComponent from "./SvgImages/ImageComponent";
import Delete from "./SvgImages/Delete";
import Edit from "./SvgImages/Edit";
import DeleteIcon from "./SvgImages/Delete";
import Done from "./SvgImages/Done";
import Doing from "./SvgImages/Doing"
import Todo from "./SvgImages/Todo";

const TasklistCard = ({ data, onDelete,   isEditing,setEditingId, newName,setNewName,onSave}) => {
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
  const [Menue, setMenue] = useState(false);
  return (
    <div className='flex  '>
    {/*  */}
    <button
     className=" hover:bg-gray-100  font-semibold mr-8 " 
      onFocus={() => setMenue(true)}
      onBlur={() => setMenue(false)}
      >
        ⋮
    </button>
   
       

<div className="flex flex-row-reverse " onMouseDown={e => e.preventDefault()}>

    {Menue ? (

<div className='z-10 absolute scrollbar-thin border py-2 border-gray-200 shadow    scrollbar-thumb-slate-200      mr-5  bg-white rounded-lg scroll-m-0 w-36 ' >  
   
   {/* <label className="cursor-pointer"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true)}}>
      
          
          
   <div className="flex items-center" >
          
        <input type="radio" id="radio" className="peer sr-only" name="pricing" />
              <div onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}><Todo/></div>
              <p className="text-xs pl-5"  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}>To-do</p>
          </div>
       
      </label> */}


   <label className="cursor-pointer"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true)}}>
        <input type="radio" className="peer sr-only" name="pricing" />
        <div className="rounded-md bg-white p-5  peer-checked:text-purle-600  peer-checked:ring-offset-2">
          
          
   <div className="flex items-center" >
          
              <div onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}><Doing/></div>
              <p className="text-xs pl-5"  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}>Doing</p>
          </div>
          </div>
      </label>
  
      <label className="cursor-pointer"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true)}} >
        <input type="radio" className="peer sr-only" name="pricing" />
        <div className=" rounded-md bg-white p-5 text-green-200 peer-checked:text-green-600  peer-checked:ring-offset-2">
          
          
   <div className="flex items-center"  onMouseDown={e => e.preventDefault()}
              onClick={() => {setMenue(true)}}>
          
              <div   className="text-xs"  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}><Done/></div>
              <p className="text-xs text-black pl-5"  onMouseDown={e => e.preventDefault()} onClick={() => {setMenue(true)}}>Done</p>
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
        <button onClick={handleEditClick}>
          <Edit/>Edit</button>
      )}
      
        </div>
       
      
   <div className="flex items-center  pl-2 ">
        <button  className="text-xs   m-2 "  onMouseDown={e => e.preventDefault()}
              // onClick={() => {setMenue(true)}}
              onClick={() => onDelete(data.id)}
              >
            <Delete />
                Delete
                </button>
       
        </div>
      </div>
    ) : null}
    </div>
</div>

    
    // </div>
  )
}

export default TasklistCard



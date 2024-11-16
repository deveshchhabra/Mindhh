import { useEffect, useState } from 'react';
import  Data  from './costants/Data2.json'

const TaskList = () => {
  const [Items, setItems] = useState([]);
  const [Menue, setMenue] = useState(false)


  const deleteItem = (id: any) => {
    const newItems = Items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  useEffect(() => {
    setItems(Data);
}, []);
  return (
    <>

    {/* <h1 className='font-bold pl-5 text-2xl'> Task List</h1> */}
  
   {Items.map((data)=>{
    return (
      <>
       <div className="border border-gray-700 border-solid rounded-lg  w-full h-32 grid grid-cols-2 gap-4 place-content-between p-2 m-2  " key={data.id}>
      <div  className="p-2 ">{data.name}</div>
      <div className="p-2  flex flex-row-reverse mr-2  ">
      {/* <TasklistButton dummy={dummy}/> */}
      <div className='flex'>
        {/*  */}
        <button
         className="bg-white hover:bg-gray-100 text-gray-800 font-semibold   border border-gray-300 rounded shadow mr-2 pr-2 " 
          onFocus={() => setMenue(true)}
          onBlur={() => setMenue(false)}
          >
            :
        </button>
       
           


        {Menue ? (
          <div className='z-10 absolute scrollbar-thin border border-black scrollbar-track-slate-50   scrollbar-thumb-slate-200 max-h-52 pr-12 mr-72  bg-white rounded-lg'>
         
                <button>Hello</button>
                <button>Hello</button>
                <button>Hello</button>
                <button>Edit</button>
                <button    onMouseDown={e => e.preventDefault()} onClick={() => deleteItem(data.id)}>Delete</button>
            

            
          </div>
        ) : null}
        </div>







      </div>
      <div  className="p-2  flex">
        <img className='rounded-full h-12 w-12 m-0   border-gray-400 border-2' src="https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg"></img>
          <div className="text-gray-500 pl-4 mb-2"> Oct 9 to 12 Oct</div>
        
          </div>
          <div  className="p-2 flex flex-row-reverse m-2">5+ Stack</div>
     
      </div>
      </>
      )})}
      </>
  )
}
     


  
   

export default TaskList

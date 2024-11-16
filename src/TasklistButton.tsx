
import { useState } from 'react'
import  Data  from './costants/Data2.json'

const TasklistButton = () => {
  const [Menue, setMenue] = useState(false)
  const [Items, setItems] = useState([]);
  useEffect(() => {
    setItems(Data);
}, []);



  

  return (
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
                <button onClick={() => deleteItem(data.id)}>Delete</button>
            

            
          </div>
        ) : null}
        </div>

  )
}

export default TasklistButton

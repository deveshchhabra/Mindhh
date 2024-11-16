import { useEffect, useState } from 'react'
import  Data  from './costants/Data1.json'
const Assign = () => {
    const [Items, setItems] = useState([ 
        ]);
    const [StrItems, setStrItems] = useState("")
    const handleAdd=()=>{
        let newData={id:Items.length+1,name:StrItems}
        setItems([...Items,newData])
        setStrItems("")
        }
    const handleItems=(e)=>{
        setStrItems(e.target.value)
    }
    const deleteItem = (id) => {
        const newItems = Items.filter((item) => item.id !== id);
        setItems(newItems);
        console.log(newItems)
      };
    useEffect(() => {
        setItems(Data);
    }, []);
    return (
    <>
                <div className='grid  grid-cols-4 w-[60%] pt-2 ml-2'>
              {
                Items.map((items)=>{
                    return(
                        <>
                        <div className='m-2'>

                        <div key={items.id} className='rounded-full    border border-gray-400 text-gray-500  flex justify-between  cursor-pointer p-2 items-center ml-2 w-full'>
                        {items.name}
                        <button className='text-xs'
                  onMouseDown={(e)=>e.preventDefault()}
                  onClick={() => deleteItem(items.id)}
                  >
                X
                  </button>
                  </div>
                  </div>
                
                        </>
                    )
                })
            }
            </div>

            <div className='w-[50%] text-right text-gray-700'>
              <span onClick={() => {setItems([])}} >
              X
               </span>
            </div>

     
        <div >
              <input className='border-0 border-b-2 w-[50%]' onChange={handleItems}/>
              <button className="rounded-full outline outline-offset-1 outline-1 px-3 py-1 m-4 text-xl ..." onClick={handleAdd}>+ </button>
        </div>
    </>
  )
}

export default Assign

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
  return (
    <>
  <h1 className=' my-4 text-gray-500 mb-2  pt-2 mt-2 '>Assignee</h1>
    <div className='flex  '>
      <div className='flex  b-2    '>
  {
    Name.length <4?
    Name.map((data)=> (data.name !==null && data.name !=="" && <div className='border-0  ' key={data.id}>
      <div className="flex flex-row w-full items-center    border-gray-00 bg-gray-100 rounded-full m-1  "  key={data.id}>
      <img className="w-8 h-8 mr-2 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" alt="Jese image"></img>
      <div className='pl-1 mx-2'>{data.name}</div>
      <div className="flex items-center space-x-2 rtl:space-x-reverse">
     <button className="text-sm mx-2 text-gray-700 "    onClick={() => DeleteItem(data.id)}>X</button>
  </div>

  </div>
    </div>))
:<>
{
  // "3 images" "then again above need "
  // console.log(Name)
  Name.map((data)=>(
    data.id<4?
    <>
    <img 
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" 
       alt="Jese image"
    className={`top-0 left-0 w-10   h-10 rounded-full  outline outline-1 outline-gray-500
    ${
     data.id === 3
        ? " -ml-4 z-30" // First image overlap
        : data.id===2
        ? "-ml-5 z-20" // Second image overlap
        :"z-10 -ml-2"// Third image fully visible
    }`}
    /> 
  
    </> 
    :
    <div className="text-xl font-medium z-0 pl-3">
    3+  click
  </div>
 

 ))

}



  
 </>
    }       </div>

      
         <div className=' flex   '>

             <input  onChange={handleChange} className='outline-0 w-20 mb-2' value={buttonName}/>
             <button onClick={addItems}  className='rounded-full w-10 h-10   border-gray-300 border-2  text-xl     ...'>+</button>
          
         </div>
       </div>
       </>
   )
 }

export default Assign 



// import React, { useEffect, useState } from "react";
// import Data from "./constants/Data1.json";

// const Assign = () => {
//   const [Name, setNames] = useState([]);
//   const [buttonName, setbuttonName] = useState("");
//   const [ShowAll, setShowAll] = useState(false);

//   useEffect(() => {
//     setNames(Data);
//   }, []);

//   const addItems = () => {
//     if (!buttonName.trim()) return; // Prevent adding empty names
//     const newItems = { id: Name.length, name: buttonName.trim() };
//     setNames([...Name, newItems]);
//     setbuttonName("");
//   };

//   const DeleteItem = (id) => {
//     const DeleteData = Name.filter((item) => item.id !== id);
//     setNames(DeleteData);
//   };

//   const handleChange = (e) => {
//     setbuttonName(e.target.value);
//   };

//   const toggleShowAll = () => {
//     setShowAll((prev) => !prev);
//   };

//   return (
//     <>
//       <h1 className="my-4 text-gray-500 mb-2 pt-2 mt-2">Assignee</h1>
//       <div className="flex">
//         <div className="flex flex-col">
//           {Name.length < 4 || ShowAll ? (
//             Name.map(
//               (data) =>
//                 data.name && (
//                   <div
//                     className="flex flex-row items-center bg-gray-100 rounded-full m-1 p-2"
//                     key={data.id}
//                   >
//                     <img
//                       className="w-8 h-8 mr-2 rounded-full"
//                       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s"
//                       alt="Avatar"
//                     />
//                     <div className="pl-1 mx-2">{data.name}</div>
//                     <button
//                       className="text-sm mx-2 text-gray-700"
//                       onClick={() => DeleteItem(data.id)}
//                     >
//                       X
//                     </button>
//                   </div>
//                 )
//             )
//           ) : (
//             <>
//               {Name.slice(0, 3).map((data, index) => (
//                 <img
//                   key={data.id}
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s"
//                   alt="Avatar"
//                   className={`w-10 h-10 rounded-full outline outline-1 outline-gray-500 ${
//                     index === 2 ? "-ml-4 z-30" : index === 1 ? "-ml-5 z-20" : "z-10 -ml-2"
//                   }`}
//                 />
//               ))}
//               <div className="text-xl font-medium ml-2 cursor-pointer text-blue-500" onClick={toggleShowAll}>
//                 {`+${Name.length - 3}`} more
//               </div>
//             </>
//           )}
//         </div>

//         <div className="flex items-center ml-4">
//           <input
//             onChange={handleChange}
//             className="outline-0 w-20 p-1 border border-gray-300 rounded-md"
//             value={buttonName}
//             placeholder="Enter name"
//           />
//           <button
//             onClick={addItems}
//             className="ml-2 rounded-full w-10 h-10 border-2 border-gray-300 text-xl flex items-center justify-center disabled:opacity-50"
//             disabled={!buttonName.trim()}
//           >
//             +
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Assign;



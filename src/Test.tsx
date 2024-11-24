// import React from 'react'

// const Test = () => {
//   return (
    
// <>
//     <div>
//           <div className="flex flex-row w-full max-w-[180px]  p-0.25  border-gray-300 bg-gray-100 rounded-full  dark:bg-gray-700">
//           <img className="w-8 h-8 rounded-full" src="https://tse3.mm.bing.net/th?id=OIP.tokqguhd7c621BnQD6XKsAHaJO&pid=Api&P=0&h=180" alt="Jese image"></img>
//       <div className="flex items-center space-x-2 rtl:space-x-reverse">
//          <span className="text-sm  text-gray-900 dark:text-white pl-8">Bonnie Green</span>
//       </div>
//       </div>

//     </div>
//      <div>
//      <div className="flex flex-row w-full max-w-[160px]  p-0.25  border-gray-300 bg-gray-100 rounded-full  dark:bg-gray-700">
//      <img className="w-8 h-8 rounded-full" src="https://tse3.mm.bing.net/th?id=OIP.tokqguhd7c621BnQD6XKsAHaJO&pid=Api&P=0&h=180" alt="Jese image"></img>
//  <div className="flex items-center space-x-2 rtl:space-x-reverse">
//     <span className="text-sm  text-gray-900 dark:text-white pl-8">Bonnie Green</span>
//  </div>
//  </div>

// </div></>

//   )
// }

// export default Test
// import React, { useEffect, useState } from 'react'
// import Data from './costants/Data1.json'
// const Assign = () => {
//     const [Name, setNames] = useState([]);
//     const [buttonName, setbuttonName] = useState("");
//     useEffect(() => {
//         setNames(Data);
//     }, []);
//     const addItems=()=>{
//         const newItems={id:Name.length+1,name:buttonName};
//         // console.log(Name)
//         setNames([...Name,newItems]);
//         setbuttonName("");

//     }
//     const handleChange=(e)=>{
//         setbuttonName(e.target.value)
//     }
//   return (
//     <div className='flex justify-between'>
//       <div className='grid grid-cols-4 p-2 '>
//   {
//     Name.length <3?
//     Name.map((data)=> (data.name !== "" && <div key={(data.id)}>{data.name}</div>))
// :"3+"
//   }
//       </div>

  
//         <div className=''>

//             <input  onChange={handleChange} className='border-0  w-[55%] ' value={buttonName}/>
//             <button onClick={addItems}  className=' w-7 h-7 rounded-full border-black border-2  '>+</button>
//         </div>
//       </div>
//   )
// }

// export default Assign


// import React, { useEffect, useState } from 'react';
// import Data from './costants/Data1.json';

// const Assign = () => {
//     const [Name, setNames] = useState([]);
//     const [buttonName, setButtonName] = useState('');
//     const [showAll, setShowAll] = useState(false); // Toggle to show all data

//     useEffect(() => {
//         setNames(Data);
//     }, []);

//     const addItems = () => {
//         const newItems = { id: Name.length, name: buttonName };
//         setNames([...Name, newItems]);
//         setButtonName('');
//     };

//     const handleChange = (e) => {
//         setButtonName(e.target.value);
//     };

//     const handleShowAll = () => {
//         setShowAll(true); // Display all items
//     };

//     return (
//         <div className="flex flex-col items-center bg-gray-100 py-8 px-4 min-h-screen">
//             {/* Data Display Section */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-2 border-gray-300 p-4 rounded-lg w-3/4 bg-white">
//                 {(showAll ? Name : Name.slice(0, 3)).map((data) => (
//                     data.name !== '' && (
//                         <div
//                             className="flex items-center bg-gray-200 rounded-lg p-3 shadow-md border border-gray-400"
//                             key={data.id + 1}
//                         >
//                             <img
//                                 className="w-10 h-10 rounded-full mr-3"
//                                 src="https://tse3.mm.bing.net/th?id=OIP.tokqguhd7c621BnQD6XKsAHaJO&pid=Api&P=0&h=180"
//                                 alt="Profile"
//                             />
//                             <span className="text-lg font-medium text-gray-700">{data.name}</span>
//                         </div>
//                     )
//                 ))}
//                 {!showAll && Name.length > 3 && (
//                     <button
//                         onClick={handleShowAll}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600"
//                     >
//                         3+ click
//                     </button>
//                 )}
//             </div>

//             {/* Input Section */}
//             <div className="flex items-center mt-6 gap-4">
//                 <input
//                     type="text"
//                     placeholder="Enter name"
//                     value={buttonName}
//                     onChange={handleChange}
//                     className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 />
//                 <button
//                     onClick={addItems}
//                     className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium shadow-md hover:bg-green-600"
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
//   }

// export default Assign


// const Test = () => {
//   return (
//     <div>
//       <div className="flex items-center gap-2">
//   <input 
//     type="checkbox" 
//     id="checkbox" 
//     className="w-5 h-5 outline outline-gray-200 border-gray-400 rounded-sm focus:ring-0 checked:bg-red-500 checked:border-red-500 peer"
//   />
//   <label htmlFor="checkbox" className="text-gray-800 peer-checked:line-through">
//     Click me
//   </label>
// </div>

//     </div>
//   )
// }

// export default Test

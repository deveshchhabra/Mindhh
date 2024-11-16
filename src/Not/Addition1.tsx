// import { useState } from 'react'

// const AutoFixer = () => {
//   const tags = ['Devesh', 'Suman', 'Sidesh', 'Risabh', 'Tech-m']
//   const [Query, setQuery] = useState('')
//   const [Menue, setMenue] = useState(false)
//   const [Selected, setSelected] = useState([])
//   const filterTags = tags.filter(
//     item =>//d
//       item.toLocaleLowerCase().includes(Query.toLocaleLowerCase().trim()) &&
//       !Selected.includes(item)
//   )

//   return (
//     // <div className='border border-black'>
    
//         <div className='pl-2 '>
//         <h1 className='text-gray-700 '>Assignee</h1>

//         {Selected.length ? (
//           <div className='bg-white relative  text-xs flex flex-wrap gap-1 p-2'>
//             {Selected.map(tags => (
//               <div className='rounded-full  p-3 border border-gray-400 text-gray-500 flex flex-row items-center gap-2 cursor-pointer'>
//                 {tags}
               
//                   <button 
//                   onMouseDown={(e)=>e.preventDefault()}
//                     onClick={()=>setSelected(Selected.filter((i)=>i!==tags))}>
//                 X
//                   </button>
//               </div>
//             ))}
//             <div className='w-full text-right text-gray-500'>
//               <span
//                 onClick={() => {
//                   setSelected([])
//                 }}
//                 >
//                 {' '}
//                 X
//               </span>
//             </div>
//           </div>
//         ) : null}
//         <div className='flex  flex-row-reverse items-center m-2 pl-7 '>
        
//         <button
//           className='rounded-full border-indigo-600 border-6  text-black py-2 px-4  bg-pink-100 text-xl hover:bg-pink-300 flex'
//           onFocus={() => setMenue(true)}
//           onBlur={() => setMenue(false)}
//           >
//           +
//         </button>
       
           
//         </div>

//         {Menue ? (
//             <div className='card absolute scrollbar-thin border border-black scrollbar-track-slate-50  scrollbar-thumb-slate-200 max-h-52   w-[30%] bg-white'>
//             <ul className='w-full'>
//               {filterTags?.length ? (
//                 filterTags.map((tag, i) => (
//                   <li
//                     className='p-2 cursor-pointer rounded-md w-full '
//                     onMouseDown={e => e.preventDefault()}
//                     onClick={() => {
//                       setMenue(true)
//                       setSelected((prev: string[]) => [...prev, tag])
//                     }}
//                     key={i}
//                     >
//                     {tag}
//                   </li>
//                 ))
//               ) : (
//                 <li className='p-2 cursor-pointer bg-fuchsia-300'>
//                   No Data Found
//                 </li>
//               )}
//             </ul>
//           </div>
//         ) : null}
//       </div>
//       //  </div>
//   )
// }

// export default AutoFixer

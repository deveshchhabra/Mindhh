// import React from 'react'

// const Todo = () => {
//   return (
//     <>
//         <div className="flex items-center">
//     {/* <input
//       type="radio"
//       id="radio"
//       name="radio"
//       className="peer hidden"
//     /> */}
//     </div>
//     <div>
//       <label
//         htmlFor="radio"
//         className="cursor-pointer w-4 h-4 border-2  rounded-full flex items-center justify-center peer-checked:bg-gray-500"
//       >
//         {/* Optional inner dot for a more classic radio button */}
//         <div className="w-3 h-3 bg-white rounded-full peer-checked:bg-gray-200"></div>
//       </label>
//     </div>
//     </>

//   )
// }

// export default Todo
import React from 'react'

const Todo = ({isSelected}) => {
  return (

    <div>
       <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isSelected ? "#dce2e6" : "#abc8d9"} // gray-500 or gray-200

        className="rounded-full transition-colors duration-200"
      >
        <circle cx="12" cy="12" r="8" />
      </svg>
    </div>
  )
}

export default Todo

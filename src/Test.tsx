


import React from "react";

const Assignee = () => {
  const users = [
    { id: 1, name: "User 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" },
    { id: 2, name: "User 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" },
    { id: 3, name: "User 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s "},
  ];

  return (
    <div className="flex  items-start p-4">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-2">Assignee</h2>
      {/* Avatar Section */}
      <div className="flex ">
        {users.map((user, index) => (
            <>
          <div>{console.log(index)} </div>  

          <img
            key={user.id}
            src={user.img}
            alt={user.name}
            className={`w-12 h-12 rounded-full border-2 border-white ${
              index === 2
                ? " -ml-4 z-30" // First image overlap
                : index === 1
                ? "-ml-4 z-20" // Second image overlap
                : "z-10" // Third image fully visible
            }`}
          />
             </>  ))}
        {/* "3+" Badge */} 
        
      </div>
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full text-xl font-medium border-2 border-white z-0">
          3+
        </div>
    </div>
  );
};

export default Assignee;



// import React, { useState } from "react";

// const RadioButtonSVG = () => {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <label className="flex items-center cursor-pointer">
//         {/* Radio Button Input */}
//         <input
//           type="radio"
//           className="hidden peer"
//           checked={isChecked}
//           onChange={handleChange}
//         />

//         {/* Custom Radio Button SVG */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="40"
//           height="40"
//           viewBox="0 0 24 24"
//           className="peer-checked:fill-red-500 fill-transparent transition-all duration-300"
//         >
//           {/* Outer Circle (Radio Button Border) */}
//           <circle
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="white"
//             strokeWidth="2"
//             fill={isChecked ? 'red' : 'transparent'} // Red when checked, transparent when not
//           />
//           {/* Inner Circle (Filled when Checked) */}
//           <circle
//             cx="12"
//             cy="12"
//             r="6"
//             className="peer-checked:fill-white fill-transparent transition-all duration-300"
//           />
//         </svg>
//       </label>
//     </div>
//   );
// };

// export default RadioButtonSVG;

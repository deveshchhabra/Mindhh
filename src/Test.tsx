




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

// import React, { useState } from 'react';

// const RadioButtonWithMenu: React.FC = () => {
//   const [menu, setMenu] = useState(false);

//   return (
//     <label className="cursor-pointer" onMouseDown={(e) => e.preventDefault()} onClick={() => setMenu(true)}>
//       <input
//         type="radio"
//         className="peer sr-only"
//         name="pricing"
//       />
//       <div className="rounded-md bg-white p-5 peer-checked:text-green-600 peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-green-600">
//         <div className="flex items-center">
//           {/* Circular icon */}
//           <div
//             onMouseDown={(e) => e.preventDefault()}
//             onClick={() => setMenu(true)}
//             className="w-6 h-6 rounded-full bg-gray-400 peer-checked:bg-gray-600 flex items-center justify-center"
//           >
//             {/* You can add any icon inside the circle */}
//           </div>

//           {/* Text label */}
//           <p
//             className="text-xs pl-5"
//             onMouseDown={(e) => e.preventDefault()}
//             onClick={() => setMenu(true)}
//           >
//             Done
//           </p>
//         </div>
//       </div>
//     </label>
//   );
// };

// export default RadioButtonWithMenu;


import React, { useState } from "react";

const FloatingLabelSelect = () => {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="flex justify-between w-full">
      <div className="flex relative rounded-md w-[40%]">
        <div className="relative flex items-center w-full border-b-2">
          {/* Select Box */}
          <select
            id="SelectBox"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="peer px-3 py-2 w-full bg-transparent rounded-lg border-0 focus:ring-0 focus:outline outline-blue-300 appearance-none"
          >
            <option value="" disabled>
              Select an option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          {/* Floating Label */}
          <label
            htmlFor="SelectBox"
            className={`text-gray-500 absolute text-sm bg-white left-3 transition-all duration-300 ease-in-out ${
              selectedOption
                ? "top-0 text-xs text-blue-500"
                : "top-1/2 transform -translate-y-1/2"
            }`}
          >
            Select Option
          </label>
        </div>
      </div>
    </div>
  );
};

export default FloatingLabelSelect;

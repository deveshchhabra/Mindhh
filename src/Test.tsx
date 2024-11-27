


// import React from "react";

// const Assignee = () => {
//   const users = [
//     { id: 1, name: "User 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" },
//     { id: 2, name: "User 2", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" },
//     { id: 3, name: "User 3", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s "},
//   ];

//   return (
//     <div className="flex  items-start p-4">
//       {/* Title */}
//       <h2 className="text-lg font-semibold mb-2">Assignee</h2>
//       {/* Avatar Section */}
//       <div className="flex ">
//         {users.map((user, index) => (
//             <>
//           <div>{console.log(index)} </div>  

//           <img
//             key={user.id}
//             src={user.img}
//             alt={user.name}
//             className={`w-12 h-12 rounded-full border-2 border-white ${
//               index === 2
//                 ? " -ml-4 z-30" // First image overlap
//                 : index === 1
//                 ? "-ml-4 z-20" // Second image overlap
//                 : "z-10" // Third image fully visible
//             }`}
//           />
//              </>  ))}
//         {/* "3+" Badge */} 
        
//       </div>
//       <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full text-xl font-medium border-2 border-white z-0">
//           3+
//         </div>
//     </div>
//   );
// };

// export default Assignee;



// // import React, { useState } from "react";

// // const RadioButtonSVG = () => {
// //   const [isChecked, setIsChecked] = useState(false);

// //   const handleChange = () => {
// //     setIsChecked(!isChecked);
// //   };

// //   return (
// //     <div className="flex items-center justify-center h-screen bg-gray-100">
// //       <label className="flex items-center cursor-pointer">
// //         {/* Radio Button Input */}
// //         <input
// //           type="radio"
// //           className="hidden peer"
// //           checked={isChecked}
// //           onChange={handleChange}
// //         />

// //         {/* Custom Radio Button SVG */}
// //         <svg
// //           xmlns="http://www.w3.org/2000/svg"
// //           width="40"
// //           height="40"
// //           viewBox="0 0 24 24"
// //           className="peer-checked:fill-red-500 fill-transparent transition-all duration-300"
// //         >
// //           {/* Outer Circle (Radio Button Border) */}
// //           <circle
// //             cx="12"
// //             cy="12"
// //             r="10"
// //             stroke="white"
// //             strokeWidth="2"
// //             fill={isChecked ? 'red' : 'transparent'} // Red when checked, transparent when not
// //           />
// //           {/* Inner Circle (Filled when Checked) */}
// //           <circle
// //             cx="12"
// //             cy="12"
// //             r="6"
// //             className="peer-checked:fill-white fill-transparent transition-all duration-300"
// //           />
// //         </svg>
// //       </label>
// //     </div>
// //   );
// // };

// // export default RadioButtonSVG;



import React, { useEffect, useState } from "react";
import Data from "./constants/Data1.json";

const Assign = () => {
  const [Name, setNames] = useState([]);
  const [buttonName, setbuttonName] = useState("");
  const [ShowAll, setShowAll] = useState(false);

  useEffect(() => {
    setNames(Data);
  }, []);

  const addItems = () => {
    if (!buttonName.trim()) return; // Prevent adding empty names
    const newItems = { id: Name.length, name: buttonName.trim() };
    setNames([...Name, newItems]);
    setbuttonName("");
  };

  const DeleteItem = (id) => {
    const DeleteData = Name.filter((item) => item.id !== id);
    setNames(DeleteData);
  };

  const handleChange = (e) => {
    setbuttonName(e.target.value);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <>
      <h1 className="my-4 text-gray-500 mb-2 pt-2 mt-2">Assignee</h1>
      <div className="flex">
        <div className="flex flex-col">
          {Name.length < 4 || ShowAll ? (
            Name.map(
              (data) =>
                data.name && (
                  <div
                    className="flex flex-row items-center bg-gray-100 rounded-full m-1 p-2"
                    key={data.id}
                  >
                    <img
                      className="w-8 h-8 mr-2 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s"
                      alt="Avatar"
                    />
                    <div className="pl-1 mx-2">{data.name}</div>
                    <button
                      className="text-sm mx-2 text-gray-700"
                      onClick={() => DeleteItem(data.id)}
                    >
                      X
                    </button>
                  </div>
                )
            )
          ) : (
            <>
              {Name.slice(0, 3).map((data, index) => (
                <img
                  key={data.id}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s"
                  alt="Avatar"
                  className={`w-10 h-10 rounded-full outline outline-1 outline-gray-500 ${
                    index === 2 ? "-ml-4 z-30" : index === 1 ? "-ml-5 z-20" : "z-10 -ml-2"
                  }`}
                />
              ))}
              <div className="text-xl font-medium ml-2 cursor-pointer text-blue-500" onClick={toggleShowAll}>
                {`+${Name.length - 3}`} more
              </div>
            </>
          )}
        </div>

        <div className="flex items-center ml-4">
          <input
            onChange={handleChange}
            className="outline-0 w-20 p-1 border border-gray-300 rounded-md"
            value={buttonName}
            placeholder="Enter name"
          />
          <button
            onClick={addItems}
            className="ml-2 rounded-full w-10 h-10 border-2 border-gray-300 text-xl flex items-center justify-center disabled:opacity-50"
            disabled={!buttonName.trim()}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Assign;


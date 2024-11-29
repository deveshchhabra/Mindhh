// import React, { useState } from "react";
// import Data from "./constants/Data2.json";
// import TasklistCard from "./TestTaksCard";

// const DeleteCard = () => {
//   const [items, setItems] = useState(Data); // List of items
//   const [selectedStatus, setSelectedStatus] = useState(null); // The status selected in the parent component

//   const handleUpdateStatus = (id, status) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, status } : item
//       )
//     );
//     setSelectedStatus(status); // Set the status of the selected item
//   };

//   return (
//     <div>
//       <h1>Selected Status: {selectedStatus || "None"}</h1> {/* Display selected status in the parent */}
//       {items.map((item) => (
//         <div key={item.id} style={{ marginBottom: "10px" }}>
//           {/* Render TasklistCard component */}
//           <TasklistCard
//             item={item}
//             onUpdateStatus={handleUpdateStatus}
//             selectedStatus={selectedStatus}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeleteCard;

// const ImageComponent = () => {
//   return (
//     <div className="flex items-center">
//       {/* Radio Input */}
//       <input
        
//         type="radio"
//           className="hidden bg-gray"
//           id="radio"
        
//         className="peer rounded-full  " // The peer element
//       />
//       {/* Label with SVG */}
//       {/* <label htmlFor="radio" className="cursor-pointer"> */}
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           {/* Outer Circle */}
//            <circle
//             cx="12"
//             cy="12"
//             r="10"
//             stroke="black"
//             strokeWidth="2"
//             fill="none" 
//           />
//           {/* Inner Circle - Appears when peer is checked */}
//           <circle
//             cx="12"
//             cy="12"
//             r="10"
//             className=" peer-checked:bg-gray-200"
//           />
//         </svg>
//       {/* </label> */}
//     </div>
//   );
// };

// export default ImageComponent;
// const CustomRadioButton = () => {
//   return (
//     <div className="flex items-center">
//       <input
//         type="radio"
//         id="radio"
//         name="radio"
//         className="peer hidden"
//       />
//       <label
//         htmlFor="radio"
//         className="cursor-pointer w-3 h-3  border-gray-500 rounded-full flex items-center justify-center peer-checked:bg-gray-200"
//       >
//         {/* Optional inner dot for a more classic radio button */}
//         <div className=" bg-white rounded-full peer-checked:bg-gray-200"></div>
//       </label>
//     </div>
//   );
// };

// export default CustomRadioButton;

// import React, { useState } from "react";
// import Data from "./constants/Data2.json";
// import TasklistCard from "./TestTaksCard"

// const DeleteCard = () => {
//   const [items, setItems] = useState(Data); // List of items
//   const [selectedStatus, setSelectedStatus] = useState(null); // The status selected in the parent component

//   const handleUpdateStatus = (id, status) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, status } : item
//       )
//     );
//     setSelectedStatus(status); // Set the status of the selected item
//   };

//   return (
//     <div>
//       <h1>Selected Status: {selectedStatus || "None"}</h1> {/* Display selected status in the parent */}
//       {items.map((item) => (
//         <div key={item.id} style={{ marginBottom: "10px" }}>
//           {/* Render TasklistCard component */}
//           <TasklistCard
//             item={item}
//             onUpdateStatus={handleUpdateStatus}
//             selectedStatus={selectedStatus}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DeleteCard;

// import React, { useState } from "react";
// import Data from "./constants/Data2.json";
// import TasklistCard from "./TestTaksCard";

// const DeleteCard = () => {
//   const [items, setItems] = useState(Data); // List of items
//   const [selectedItem, setSelectedItem] = useState(null); // The selected item for rendering

//   const handleUpdateStatus = (id, status) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, status } : item
//       )
//     );
//     const updatedItem = items.find((item) => item.id === id);
//     setSelectedItem({ ...updatedItem, status }); // Update the selected item
//   };

//   return (
//     <div>
//       <h1>Selected Status: {selectedItem?.status || "None"}</h1> {/* Display selected item's status */}
//       {selectedItem ? (
//         // Render only the selected item
//         <TasklistCard
//           item={selectedItem}
//           onUpdateStatus={handleUpdateStatus}
//           selectedStatus={selectedItem.status}
//         />
//       ) : (
//         // Render all items initially
//         items.map((item) => (
//           <div key={item.id} style={{ marginBottom: "10px" }}>
//             <TasklistCard
//               item={item}
//               onUpdateStatus={handleUpdateStatus}
//               selectedStatus={item.status}
//             />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DeleteCard;

// import React, { useState } from "react";
// import Data from "./constants/Data2.json";
// import TasklistCard from "./TestTaksCard";

// const DeleteCard = () => {
//   const [items, setItems] = useState(Data); // List of items
//   const [selectedItem, setSelectedItem] = useState(null); // The selected item for rendering

//   const handleUpdateStatus = (id, status) => {
//     setItems(
//       items.map((item) =>
//         item.id === id ? { ...item, status } : item
//       )
//     );
//     // Find and set the selected item with the updated status
//     const updatedItem = items.find((item) => item.id === id);
//     setSelectedItem({ ...updatedItem, status });
//   };

//   return (
//     <div>
//       <h1>Selected Status: {selectedItem?.status || "None"}</h1> {/* Display selected item's status */}
//       {/* Render only the selected item */}
//       {selectedItem ? (
//         <div key={selectedItem.id} style={{ marginBottom: "10px" }}>
//           <TasklistCard
//             item={selectedItem}
//             onUpdateStatus={handleUpdateStatus}
//             selectedStatus={selectedItem.status}
//           />
//         </div>
//       ) : (
//         // If no item is selected, render all items
//         items.map((item) => (
//           <div key={item.id} style={{ marginBottom: "10px" }}>
//             <TasklistCard
//               item={item}
//               onUpdateStatus={handleUpdateStatus}
//               selectedStatus={item.status}
//             />
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default DeleteCard;
import React, { useState } from "react";
import Data from "./constants/Data2.json";
import TasklistCard from "./TestTaksCard";

const DeleteCard = () => {
  const [items, setItems] = useState(Data); // List of items
  const [statuses, setStatuses] = useState({}); // Track statuses for each task

  const handleUpdateStatus = (id, status) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );

    setStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: status,
    }));
  };

  return (
    <div>
      <h1>Selected Statuses:</h1>
      <ul>
        {Object.entries(statuses).map(([id, status]) => {
          const task = items.find((item) => item.id.toString() === id);
          return (
            <li key={id}>
              <strong>Status:</strong> {status} -<strong>Task:</strong> {task?.name || "Unknown"}
            </li>
          );
        })}
      </ul>
      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <TasklistCard
            item={item}
            onUpdateStatus={handleUpdateStatus}
          />
        </div>
      ))}
    </div>
  );
};

export default DeleteCard;

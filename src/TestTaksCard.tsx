
// const TasklistCard = ({
//   item,
//   onUpdateStatus,
//   selectedStatus,
// }) => {
//   const handleLabelClick = (status) => {
//     onUpdateStatus(item.id, status); // Update status in the parent
//   };

//   return (
//     <div>
//       <h3>{item.name}</h3> {/* Display item name */}
//       <div>
//         {/* Render the 3 labels (Todo, To-Do, Done) */}
//         <button
//           onClick={() => handleLabelClick("Todo")}
//           disabled={selectedStatus === "Todo"}
//         >
//           Todo
//         </button>
//         <button
//           onClick={() => handleLabelClick("To-Do")}
//           disabled={selectedStatus === "To-Do"}
//         >
//           To-Do
//         </button>
//         <button
//           onClick={() => handleLabelClick("Done")}
//           disabled={selectedStatus === "Done"}
//         >
//           Done
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TasklistCard;


// import React from "react";

// const TasklistCard = ({
//   item,
//   onUpdateStatus,
//   selectedStatus,
// }) => {
//   const handleLabelClick = (status) => {
//     onUpdateStatus(item.id, status); // Update status in the parent
//   };

//   return (
//     <div>
//       <h3>{item.name}</h3> {/* Display item name */}
//       <div>
//         {/* Render the 3 labels (Todo, To-Do, Done) */}
//         <button
//           onClick={() => handleLabelClick("Todo")}
//           disabled={selectedStatus === "Todo"}
//         >
//           Todo
//         </button>
//         <button
//           onClick={() => handleLabelClick("To-Do")}
//           disabled={selectedStatus === "To-Do"}
//         >
//           To-Do
//         </button>
//         <button
//           onClick={() => handleLabelClick("Done")}
//           disabled={selectedStatus === "Done"}
//         >
//           Done
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TasklistCard;



import React from "react";

const TasklistCard = ({ item, onUpdateStatus, selectedStatus }) => {
  const handleLabelClick = (status) => {
    onUpdateStatus(item.id, status); // Update status in the parent
  };

  return (
    <div>
      <h3>{item.name}</h3> {/* Display item name */}
      <div>
        {/* Render the 3 labels (Todo, To-Do, Done) */}
        <button
          onClick={() => handleLabelClick("Todo")}
          disabled={selectedStatus === "Todo"}
        >
          Todo
        </button>
        <button
          onClick={() => handleLabelClick("To-Do")}
          disabled={selectedStatus === "To-Do"}
        >
          To-Do
        </button>
        <button
          onClick={() => handleLabelClick("Done")}
          disabled={selectedStatus === "Done"}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TasklistCard;

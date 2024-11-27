import React from "react";

const TasklistCard = ({ item, onUpdateStatus }) => {
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
          disabled={item.status === "Todo"}
        >
          Todo
        </button>
        <button
          onClick={() => handleLabelClick("Doing")}
          disabled={item.status === "Doing"}
        >
          Doing
        </button>
        <button
          onClick={() => handleLabelClick("Done")}
          disabled={item.status === "Done"}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default TasklistCard;

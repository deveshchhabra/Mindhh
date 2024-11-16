import React, { useEffect, useState } from "react";
import Data from "../costants/Data1.json";

const Assign = () => {
  const [items, setItems] = useState([]); // State for storing the items
  const [editIndex, setEditIndex] = useState(null); // State to track the item being edited
  const [editValue, setEditValue] = useState(""); // State to store the current edit value

  // Initialize items from JSON data
  useEffect(() => {
    setItems(Data);
  }, []);

  // Handle input change for editing
  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };

  // Save the edited item
  const saveEdit = () => {
    if (editValue.trim() === "") return; // Prevent saving empty input
    const updatedItems = [...items];
    updatedItems[editIndex].name = editValue; // Update the name of the edited item
    setItems(updatedItems);
    setEditIndex(null); // Reset edit state
    setEditValue(""); // Clear edit input
  };

  // Start editing an item
  const editItem = (index) => {
    setEditIndex(index); // Set the index of the item being edited
    setEditValue(items[index].name); // Set the current value of the item in the input field
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditIndex(null);
    setEditValue(""); // Clear edit input
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={item.id} style={{ marginBottom: "8px" }}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editValue}
                  onChange={handleInputChange}
                  placeholder="Edit item"
                />
                <button onClick={saveEdit} style={{ marginLeft: "8px" }}>
                  Save
                </button>
                <button onClick={cancelEdit} style={{ marginLeft: "8px" }}>
                  Cancel
                </button>
              </div>
            ) : (
              <div>
                <span>{item.name}</span>
                <button onClick={() => editItem(index)} style={{ marginLeft: "8px" }}>
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assign;

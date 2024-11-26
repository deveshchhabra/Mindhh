import React from "react";

const Assignee = () => {
  const users = [
    { id: 1, name: "User 1", img: "https://via.placeholder.com/50" },
    { id: 2, name: "User 2", img: "https://via.placeholder.com/50" },
    { id: 3, name: "User 3", img: "https://via.placeholder.com/50" },
  ];

  return (
    <div className="flex flex-col items-start p-4">
      <h2 className="text-lg font-semibold mb-2">Assignee</h2>
      <div className="flex items-center space-x-2">
        {users.map((user) => (
          <img
            key={user.id}
            src={user.img}
            alt={user.name}
            className="w-12 h-12 rounded-full border border-gray-300"
          />
        ))}
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full text-xl border border-gray-300">
          3+
        </div>
      </div>
    </div>
  );
};

export default Assignee;

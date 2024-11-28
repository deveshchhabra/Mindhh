import React, { useState } from 'react';

const RadioButtonWithMenu: React.FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <label className="cursor-pointer" onMouseDown={(e) => e.preventDefault()} onClick={() => setMenu(true)}>
      <input
        type="radio"
        className="peer sr-only"
        name="pricing"
      />
      <div className="rounded-md bg-white p-5 peer-checked:text-green-600 peer-checked:ring-offset-2 peer-checked:ring-2 peer-checked:ring-green-600">
        <div className="flex items-center">
          {/* Circular icon */}
          <div
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setMenu(true)}
            className="w-6 h-6 rounded-full bg-gray-400 peer-checked:bg-gray-600 flex items-center justify-center"
          >
            {/* You can add any icon inside the circle */}
          </div>

          {/* Text label */}
          <p
            className="text-xs pl-5"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setMenu(true)}
          >
            Done
          </p>
        </div>
      </div>
    </label>
  );
};

export default RadioButtonWithMenu;
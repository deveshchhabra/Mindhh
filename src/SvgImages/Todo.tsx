import React from 'react'

const Todo = () => {
  return (
    <>
        <div className="flex items-center">
    <input
      type="radio"
      id="radio"
      name="radio"
      className="peer hidden"
    />
    </div>
    <div>
      <label
        htmlFor="radio"
        className="cursor-pointer w-6 h-6 border-2 border-gray-500 rounded-full flex items-center justify-center peer-checked:bg-gray-500"
      >
        {/* Optional inner dot for a more classic radio button */}
        <div className="w-3 h-3 bg-white rounded-full peer-checked:bg-gray-200"></div>
      </label>
    </div>
    </>

  )
}

export default Todo

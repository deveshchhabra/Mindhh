const InteractiveIcon = () => {
    return (
      //  <div className="flex items-center justify-center h-screen bg-gray-100">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden peer"
          />
          {/* SVG Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className=" transition duration-300 "
          >
            <circle
            cx="12"
            cy="12"
            r="10"
            stroke="bg-gray-500"
            fill="none"
          />
            {/* fill-purple-100 text-purple-100 peer-checked:text-purple-400  peer-checked:fill-purple-500 */}
            <rect
              x="3.5"
              y="3.5"
              width="17"
              height="17"
              rx="8.5"
              stroke="white"
            />
            <g clipPath="url(#clip0_371_17613)">
              <path
                d="M16.1668 11.1667V9.50004C16.1668 8.57957 15.4206 7.83337 14.5002 7.83337H9.50016C8.57969 7.83337 7.8335 8.57957 7.8335 9.50004V14.5C7.8335 15.4205 8.57969 16.1667 9.50016 16.1667H16.1668"
                stroke="white"
                strokeWidth="0.625"
                strokeLinecap="round"
              />
              <path
                d="M12 9.5V11.375M11.375 12.625L10.75 13.25"
                stroke="white"
                strokeWidth="0.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.625 12C12.625 12.3452 12.3452 12.625 12 12.625C11.6548 12.625 11.375 12.3452 11.375 12C11.375 11.6548 11.6548 11.375 12 11.375C12.3452 11.375 12.625 11.6548 12.625 12Z"
                stroke="white"
                strokeWidth="0.625"
              />
              <path
                d="M13.6665 14.5H16.1665"
                stroke="white"
                strokeWidth="0.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 12.8334H16.1667"
                stroke="white"
                strokeWidth="0.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_371_17613">
                <rect
                  width="10"
                  height="10"
                  fill="white"
                  transform="translate(7 7)"
                />
              </clipPath>
            </defs>
          
          </svg>
        </label>
      // </div> 
    );
  };
  
  export default InteractiveIcon;
import { useState } from "react"

const Card = ({ Data }) => {

  return (
    <div>

    <div className='border border-gray-300 wl-full h-36 w-[80%] flex justify-between rounded-lg m-4'>
      <div dir='ltr'>
        <div className='m-4 mb-9 ...'>
          <div className='  top-0 start-0 ...'>
            {Data ? Data.name : 'Relative'}{' '}
          </div>
        </div>

        <div className='m-2 pb-2 pr-1  mr-2 relative flex flex-row justify-between place-items-center w-[75%]'>
          <img
            className='rounded-full w-16 h-16 m-0   border-gray-400 border-2'
            src={Data.image_url}
          ></img>
          <div className=' text-gray-500'> </div>
        </div>
      </div>
      <div dir='rtr '>
        <div>
          <div className='m-4 mb-9 p-2 ...'>{}
            <div className='  top-0 start-0 ... z-10'>
            <button id='dropdownMenuIconButton' data-dropdown-toggle='dropdownDots' data-dropdown-placement='bottom-start' className='inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600 z-10'
         onFocus={() => setMenue(true)}
         onBlur={() => setMenue(false)}
            type='button'
              >
                <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor'  viewBox='0 0 4 15'
                >
                  <path d='M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z' />
                </svg>
              </button>
              <div  className='z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700 dark:divide-gray-600'>
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton"   >
         <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reply</a>
         </li>
        
         <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
         </li>
         <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
         </li>
      </ul>

   </div>
            </div>
          </div>
        </div>
        <div className='mr-5 ...'>
          <div className='  bottom-0 start-0 ...'>5+ substack</div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Card

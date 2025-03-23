import Bell from "./Svgheader/Bell"
import Logo from "./Svgheader/Logo"
// import Setting from "./Svgheader/Setting"

const Header = () => {
  return (
    <div className="flex justify-between border-b-2 border-1 p-4 ">
      


      <div className=" "><Logo /></div>
    
      <div className="flex px-8  ">
        <button className="px-28  bg-[#b3ff91] font-bold py-2  border-spacing-1 rounded m-1 mx-5">CHECK IN</button>
        {/* <button className="mx-2"><Setting /></button> */}
        <button className="mx-2"><Bell /></button>
        <button className="mx-2"> 
        <img className="w-9 h-9 mr-2 rounded-full border border-purple-600" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5QDzt-JYNhuLn7Mqchny1cc1YNoqjTtN2g&s" alt="Jese image"></img>
        </button>


     
       

      
        
      </div>
    </div>
  )
}

export default Header

import { ProjectDetails } from "./ProjectDetails"
import Note from "./Note"
import DND from "./DND"
import TaskList from "./TaskList"
import ActiviesList from "./ActiviesList"
import Button from "./Button"
import Assign from "./Assign"
// import Test from "./Test"
// import AutoFixer from "./Not/AutoFixer"
const Body = () => {
  return (
    <div className="flex justify-between ">
    <div className="w-[50%] grid grid-cols-1 justify-between m-6 p-6  ">
         <ProjectDetails />
         <Assign />
         <Note /> 
         <DND/> 
         <ActiviesList />    
         {/* <AutoFixer /> */}
       </div>
    <div className="w-[50%]  m-6 p-6">
        <Button />
        <TaskList />
           {/* <Test /> */}
    </div>
          </div>
  )
}

export default Body
import { ProjectDetails } from "./ProjectDetails"
import Note from "./Note"
import DND from "./DND"
import Card from "./Card"
import TaskList from "./TaskList"
import ActiviesList from "./ActiviesList"
import Sample from "./Sample"
import Button from "./Button"
import Assign from "./Assign"
import AutoFixer from "./Not/AutoFixer"
const Body = () => {
  return (
    <div className="flex justify-between ">
    <div className="w-[60%] grid m-6 p-6  ">
         {/* <ProjectDetails />
         <Assign />
         <Note /> 
         <DND/>
         <ActiviesList /> */}
         <AutoFixer />
       </div>
    <div className="w-[60%]  m-6 p-6">
       <Button />
       <TaskList />
    </div>
          </div>
  )
}

export default Body
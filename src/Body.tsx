import { ProjectDetails } from "./ProjectDetails"
import Note from "./Note"
import DND from "./DND"
import TaskList from "./TaskList"
import ActiviesList from "./ActiviesList"
import Button from "./Button"
import Assign from "./Assign"
import Test from "./Test"
import TestTaskList from "./TestTaskList"
const Body = () => {
  return (
    <div className="flex justify-between divide-x ">
    <div className="w-[50%] grid grid-cols-1 justify-between m-6 p-6  ">
         <ProjectDetails />
         <Assign />
         <Note /> 
         <DND/> 
         <ActiviesList />     
       </div>
    <div className="w-[50%]  m-6 p-6">
        {/* <Button />
        <TaskList /> */}
        <div>
    <div className="border-0 border-b-2 border-gray-200  border-dashed p-3 mx-5 ">
    </div>
    </div>

          {/* <TestTaskList /> */}
         <Test />
    </div>
          </div>
  )
}

export default Body
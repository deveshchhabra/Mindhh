import { ProjectDetails } from "./components/ProjectDetails"
import Note from "./components/Note"
import DND from "./components/DND"
import TaskList from "./components/TaskList"
import ActiviesList from "./components/ActiviesList"
import Button from "./components/Button"
import Assign from "./components/Assign"
import Test from "./Test"
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
        <Button />
        <TaskList />
        <div>
        <div className="border-0 border-b-2 border-gray-200  border-dashed p-3 mx-5 ">
        </div>
    </div>

        {/* <Test /> */}
    </div>
          </div>
  )
}

export default Body
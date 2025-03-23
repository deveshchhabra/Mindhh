import { useState } from "react"
const count:number=4
const DragNdrop = () => {
  const [UploadFiles, setUploadFiles] = useState([]);
  const [fileLimit, setfileLimit] = useState(false);
  const handleUploads=(files)=>{
    const  Uploaded=[...UploadFiles];
    let Limited=false
    files.some((files)=>{
      if(UploadFiles.findIndex((f)=>f.name===files.name)===-1)
      {
        Uploaded.push(files);
        if(Uploaded.length===count)setfileLimit(true)
          if(Uploaded.length>count){
            Limited=true;
            setfileLimit(false);
            alert(`Your Reach ${count}`)
            return true;
          }

      }
    })
    if(!fileLimit)setUploadFiles(Uploaded)
  }
  const handleEvent=(e)=>{
    const chooseFiles=Array.prototype.slice.call(e.target.files)
    handleUploads(chooseFiles)
  }

  return (
    <>
    <div  key={"i"}>
    <input type='file' multiple 
      accept='image/png,image/jpeg'
      className="hidden"
      onChange={handleEvent}
      id='fileUpload'
      disabled={fileLimit}
      />

    <label htmlFor="fileUpload" className="file-upload-label   p-10 rounded-lg flex flex-col items-center space-y-4 cursor-pointer">
 
    <div  className="bg-purple-400 p-3 rounded-lg">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 32 32" 
      id="fileUpload" 
      className="h-6 "
      aria-hidden="true"
    >
      <g>
        <path d="M29 18a1 1 0 0 0-1 1v2.08A6.92 6.92 0 0 1 21.08 28H10.92A6.92 6.92 0 0 1 4 21.08V19a1 1 0 0 0-2 0v2.08A8.93 8.93 0 0 0 10.92 30h10.16A8.93 8.93 0 0 0 30 21.08V19a1 1 0 0 0-1-1Z"></path>
        <path d="M16 26a1 1 0 0 0 1-1V5.41l7.29 7.3a1 1 0 0 0 1.42-1.42l-9-9a1 1 0 0 0-.3-.19h-.1a1 1 0 0 0-.25-.1H16a.85.85 0 0 0-.31.06.85.85 0 0 0-.3.19l-9 9a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L15 5.41V25a1 1 0 0 0 1 1Z"></path>
      </g>
    </svg>
  </div>

  {/* Drag & Drop Text */}
  <span className="drag-drop-text text-center text-lg ">
    Drag & Drop or 
    <a 
      className={`text-purple-600 hover:underline ${!fileLimit ? '' : 'disabled'} px-2`} 
      role="button"
      id="fileUpload" 
      aria-disabled={fileLimit}
    >
     to Choose
    </a>
    a Logo to Upload
  </span>
</label>


</div>



			<div className="grid grid-cols-2 place-content-center">
        {
          UploadFiles.map((file,i)=>(
            <div key={i}>
              {file.name}
              </div>
          ))
        }

      </div>
      </>
  )
}

export default DragNdrop

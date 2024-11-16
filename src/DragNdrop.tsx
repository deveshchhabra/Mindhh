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
      console.log(files)
    })
    if(!fileLimit)setUploadFiles(Uploaded)
  }
  const handleEvent=(e)=>{
    const chooseFiles=Array.prototype.slice.call(e.target.files)
    console.log(chooseFiles)
    handleUploads(chooseFiles)
  }

  return (
    <div  key={"i"}>

    <div className="h-36 grid place-content-center ">
      <input type='file' multiple 
      accept='image/png,image/jpeg'
      className="hidden"
      onChange={handleEvent}
      id='fileUpload'
      disabled={fileLimit}
      />
      <label htmlFor='fileUpload'>
				Drag&DropOr <a className={` text-blue-500 btn btn-primary ${!fileLimit ? '' : 'disabled' } `}>Upload Files</a>Choose  logoto Upload
			</label>

			<div className="grid grid-cols-2 place-content-center">
        {
          UploadFiles.map((file,i)=>(
            <div key={i}>
              {file.name}
              </div>
          ))
        }

      </div>
    </div>
      </div>
  )
}

export default DragNdrop

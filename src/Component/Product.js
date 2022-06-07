import React,{useState} from 'react'

export default function Product() {
  const [file, setFile] = useState()

  const handleChange = (e) => {
   
    setFile(e.target.files[0])
  };



  return (
    <div>
      <form>
      <h5 style={{paddingTop:"30px"}}>File Upload</h5>
      <input type="file" onChange={handleChange}  />
      <button style={{width:"90px"}}>uploadfile</button>
      </form>
    </div>
  )
}



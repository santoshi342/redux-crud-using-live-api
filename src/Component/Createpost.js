import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { createpost } from "../Redux/Action/userAction";


export default function App() {
  const {
    register,
    reset, 
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const create =(data)=>{
    reset();
    dispatch(createpost(data));
    console.log('888888', data)

    if(data.title===''&&data.description===''){
      success(false)
    }else{
      setSuccess(true)
      navigate("/dashboard");
    }

  }
  

  return (
    <div>
       
      <center>
     
      <form onSubmit={handleSubmit(create)}>
      <h4>Create Post Here!</h4>
        <div className="field-form">
          <input
            type="text"
            placeholder="Enter title"
            {...register("title", { required: true })}
          />
          {errors?.title?.type === "required" && (
            <p className="error">Title is required*</p>
          )}
     
        </div>
        <br />
        <div>
          <input
            type="text"
            placeholder="Enter Description"
            {...register("description", { required: true })}
          />
          {errors?.description?.type === "required" && (
            <p className="error">Description is required*</p>
          )}
        </div>
        <br />

        <button>Submit</button>
      </form>
      {success?<h4 className="submit-msg"> Post have been created Successfully!</h4>: <h3>  </h3>}
      </center>
    </div>
  );
}

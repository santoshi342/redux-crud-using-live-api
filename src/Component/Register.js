import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { registeruser } from "../Redux/Action/userAction";
import { useForm } from "react-hook-form";



const Register = () => {
 
  const {register,handleSubmit,watch,formState: { errors },emailIsUnique,
  formState: { isSubmitting },
reset, 
  } = useForm();
 
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false)
  

  const RegisterUser = (data) => {
    reset();

    dispatch(registeruser(data));
    if(data.email===''&&data.password===''&&data.confirmpassword===''){
      success(false)
    }else{
      setSuccess(true)

    }
    console.log('1111', data)

  };


  return (
    <div><br/>
      <center>
      <h5>Registration Form!</h5><br/>
        
      <form onSubmit={handleSubmit(RegisterUser)}>       
        <div className="field-form">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: true,
              validate: emailIsUnique})}
            
          />

         {errors.email && errors.email.type === "required" && (
            <p className="error">Email is required.</p>
          )}
          {errors.email && errors.email.type === "validate" && (
            <p className="error">Enter unique email.</p>
          )}

        </div><br/>

        <div className="field-form">
          <input
            type="password"
            minLength={6}
            placeholder="Enter Password"
            {...register("password", {
              required: true})}  
          />
          {errors?.password?.type === "required" && <p className="error">Password required min 6 digit*</p>}
        </div><br/>

        <div className="field-form">
          <input
            type="password"
            minLength={6}
            placeholder="Enter Confirm Password"
            
            {...register("confirmpassword", {
              required: true,
              validate: val => {
                if (watch('password') !== val) {
                  return "Your passwords do no match";
                }
              },
             })}
          />
          {errors?.confirmpassword?.type === "required" && <p className="error">Confirm Password required*</p>}
        </div><br/>
       
        <div className="field-form">
        <span>Have an account?</span>
        <Link to="/login"> Login</Link>{" "}

          <button>Register</button>  
        </div>
      
      </form><br/>
     
      {success?<h6 className="submit-msg"> User have been Registration Successfully!</h6>: <h6>  </h6>}
  
      </center>
    </div>
  );
};

export default Register;

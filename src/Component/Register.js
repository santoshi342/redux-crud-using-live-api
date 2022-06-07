import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registeruser } from "../Redux/Action/userAction";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;



const Register = () => {
 
  const {register,handleSubmit,watch,formState: { errors },emailIsUnique,

reset, 
  } = useForm();
 
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const getpost = useSelector((state) => state);
  console.log('00000', getpost)

  const [success, setSuccess] = useState(false)
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordShown1, setPasswordShown1] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const toggle = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  
  const RegisterUser = (data) => {
    console.log('222222', data)
    reset();
    dispatch(registeruser(data));
  };

  useEffect((data) => {
    if (getpost?.post?.data?.data?.success) {
      toast.success(`User Register successfully`);   
      window.location.href="/dashboard"
    }else if (getpost?.post?.showError?.response?.data?.errors){
      toast.error(`Email has already been taken`)
    }
    // else if(getpost?.post?.showError?.responce?.data?.errors){
    //   toast.error(`Password confirmation doesn't match Password`)
    // }   
  }, [getpost.post]);

  return (
    <div className="main-form"><br/>
      <center>
          
      <form onSubmit={handleSubmit(RegisterUser)}  className="form"> 
      <h5 className="regheading">Registration Form!</h5><br/>
            
        <div className="field-form">
       
          <input
            type="email"
            placeholder="Enter Email"
            className="reginput"
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
            type={passwordShown ? "text" : "password"}
            minLength={6}
            placeholder="Enter Password"
            {...register("password", {
              required: true})}  
          />
           <i id ="eye-icon" className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
          {errors?.password?.type === "required" && <p className="error">Password required min 6 digit*</p>}
        </div><br/>

        <div className="field-form">
          <input
           type={passwordShown1 ? "text" : "password"}
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
           <i id ="eye-icon" className="eye" onClick={toggle}>{eye}</i>
          {errors?.confirmpassword?.type === "required" && <p className="error">Confirm Password required*</p>}
        </div><br/>
       
        <div className="field-form">
        <span>Have an account?</span>
        <Link to="/login"> Login</Link>{" "}

          <button>Register</button>  
        </div>
      
      </form><br/>
      </center>
    </div>
  );
};

export default Register;

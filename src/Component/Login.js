import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginuser } from "../Redux/Action/userAction";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };



  const getpost = useSelector((state) => state);
  console.log('00000', getpost)

 
  const LoginUser = (data) => {
  dispatch(loginuser(data));
  };


  useEffect((data) => {
    if (getpost?.post?.data?.data?.success) {
      toast.success(`User login successfully`);   
      window.location.href="/dashboard"
    }else if (getpost?.post?.showError?.response?.data?.errors){
      toast.error(`Invalid Email and password`)
    }   
  }, [getpost.post]);


  return (
    <div className="main-form"><br/>
      <center>
      
      <form onSubmit={handleSubmit(LoginUser)} className="form">
      <h5 className="regheading">Login Form! </h5><br />
        <div className="field-form">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error">Email required*</p>
          )}
        </div>
        <br />
        
        <center><div className="field-form" id="pass-wrapper" > 
           <input
            // type="password"
            type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
            {...register("password", {
              required: true})}     
          />
          <i id ="eye-icon" className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
          {errors?.password?.type === "required" && <p className="error">Password required*</p>}
         
        </div></center><br/>

        <div className="field-form">
          <span style={{fontSize:"15px"}}>Not have an account?</span>
          <Link to="/register"> Register</Link> 
          <button>Login</button>
        </div><br />
        <div>
          <span>
          <Link to="/forgot-password"> Forgot Password</Link>
          </span>
          </div>
      </form>
      </center>
    </div>
  );
};

export default Login;

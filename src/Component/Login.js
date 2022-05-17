import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginuser } from "../Redux/Action/userAction";
import { useDispatch,useSelector } from "react-redux";
import { toast } from "react-toastify";


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

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
    <div><br/>
      <center>
      <h4>Login Form! </h4><br />
      <form onSubmit={handleSubmit(LoginUser)}>
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
        
        <div className="field-form">
          <input
            type="password"
            placeholder="Enter Password"
            {...register("password", {
              required: true})}  
          />
          {errors?.password?.type === "required" && <p className="error">Password required*</p>}
        </div><br/>
         
        <div className="field-form">
          <span>Not have an account?</span>
          <Link to="/register"> Register</Link> <button>Login</button>
        </div>
      </form>
      </center>
    </div>
  );
};

export default Login;

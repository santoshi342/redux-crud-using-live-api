import React, {useState } from "react";
import { useForm } from "react-hook-form";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Resetpassword = () => {
    const {register,handleSubmit,watch,formState: { errors },
    } = useForm();

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown1, setPasswordShown1] = useState(false);
  
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const toggle = () => {
      setPasswordShown1(passwordShown1 ? false : true);
    };
    

  const Resetpass = (data) => {
    console.log("generate new password!");
  };

  return (
    <div  className="main-form">
        <center>
      <form onSubmit={handleSubmit(Resetpass)} className="form" >
      <h5 className="resetpass">Create A New Password</h5>
      <div className="field-form">
          <input
            type={passwordShown ? "text" : "password"}
            placeholder="Enter New Password"
            {...register("password", {
              required: true})}  
          />
           <i id ="eye-icon" className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
          {errors?.password?.type === "required" && <p className="error">New Password required*</p>}
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
          <button className="resetbtn">Reset Password</button>
        </div><br />

      </form>
      </center>

      <br />
    </div>
  );
};

export default Resetpassword;

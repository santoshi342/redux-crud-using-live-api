import React from "react";
import { useForm } from "react-hook-form";

const Forgotpassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  const Forgotpass = (data) => {
    console.log("User have reset password!");
  };

  return (
    <div className="main-form">
        <center>
      <form onSubmit={handleSubmit(Forgotpass)} className="form">
      <h5 className="forgotpass">Forgot Password</h5>
      <p className="forgotpara">Lost your password? Please enter your email. We'll send you a link to <br />create a new password via email reset your password!.</p>
        <div className="field-form">
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="error">We can not find your email*</p>
          )}
        </div><br />

        <div className="field-form">
          <button className="forgotbtn">Forgot Password</button>
        </div><br />

      </form>
      </center>

      <br />
    </div>
  );
};

export default Forgotpassword;

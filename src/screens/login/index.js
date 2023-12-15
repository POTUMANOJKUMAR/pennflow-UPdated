import React, { useState } from "react";
import "./styles.scss";
import NormalInput from "../../components/inputField";
import NormalButton from "../../components/NormalButton";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleEmailChange = async (event) => {
    setSuccess(true);
  };

  const onSubmit = (data) => {
    console.log(data, "data");
    navigate("/main/dashboard");
  };
  const customErrorMessages = {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  };
  return (
    <>
      <form
        className="col-md-6 login-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="login-content">
          <p className="content-title">Login</p>
          <p className="login-text">
            Welcome back , please login to your account
          </p>
          <div className="login-input-container">
            <label
              className={`login-input-label ${
                errors.email !== undefined ? "text-danger" : ""
              }`}
            >
              Work Email ID
            </label>
            <NormalInput
              type={"text"}
              onChange={handleEmailChange}
              register={register("email", {
                required: customErrorMessages.required,
                pattern: customErrorMessages.pattern,
              })}
              error={errors.email}
              messages={customErrorMessages}
            />

            <label className="login-input-label">Password</label>
            <NormalInput type={"password"} />
          </div>
          <div className="login-checkbox-container">
            <div className="d-flex">
              <NormalInput type={"checkbox"} checkboxInput />
              <p className="login-checkbox-label ">Remember me</p>
            </div>
            <div>
              <p
                className="login-forgot-text"
                onClick={() => navigate("/auth/forgot-password")}
              >
                Forgot Password ?
              </p>
            </div>
          </div>
          <div className="mt-2">
            <NormalButton label={"Sign In"} loginBtn />
          </div>
          <div className="login-copy-right">
            Copyright 2023 PennyFlo Ltd
            <div>
              <span className="login-privacy">Privacy Policy</span>{" "}
              <span className="login-privacy">Term of Use</span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;

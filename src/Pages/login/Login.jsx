import React from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import "./login.css";

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (userData) => {
    toast.success("login successful");
    history.push("/dashboard");
  };
  return (
    <div class="grid-container">
      <div class="grid-item item1">
        <i class="fas fa-user-plus fa-5x"></i>
        <p style={{ fontSize: "52px" }}>STUDENT HUB</p>
      </div>
      <div class="grid-item">
        <div class="block">
          <a type="button" href="/register" class="btn btn-dark dark1">
            Sign Up
          </a>
        </div>
        <div class="block1">
          <p style={{ fontSize: "16px" }}>Welcome</p>
          <p>Log in to access university class booking services </p>
        </div>
        <div class="block2">Social Networks</div>
      </div>
      <div class="grid-item">
        <div class="block3">
          <a type="button" href="#" class="btn btn1">
            Sign In
          </a>
        </div>
        <div class="block4">
          <form onSubmit={(e) => e.preventDefault()}>
            <div class="input-container">
              <input
                className="input-field"
                type="email"
                placeholder="email"
                name="email"
                {...register("email", {
                  required: "Enter your Email Address",
                  pattern: {
                    value: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Enter a valid e-mail address",
                  },
                })}
              />
              <i class="fa fa-envelope icon"></i>
            </div>
            {errors.email && (
              <p className="errorMessage">{errors.email.message}</p>
            )}
            <div class="input-container">
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <i class="fa fa-key icon"></i>
            </div>
            {errors.password && (
              <p className="errorMessage">{errors.password.message}</p>
            )}
            <div class="input-container" style={{ marginLeft: "310px" }}>
              <button
                type="submit"
                class="btn btn1"
                onClick={handleSubmit(handleLogin)}
              >
                Log in<i class="fa fa-arrow-right icon1"></i>
              </button>
            </div>
          </form>
        </div>
        <div class="block5">
          <ul>
            <li>
              <i class="fab fa-facebook-f fa-x"></i>
            </li>
            <li>
              <i class="fab fa-twitter fa-x"></i>
            </li>
            <li>
              <i class="fab fa-github fa-x"></i>
            </li>
            <li>
              <i class="fab fa-linkedin-in fa-x"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;

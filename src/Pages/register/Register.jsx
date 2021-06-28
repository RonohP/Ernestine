import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// import useForm from "../../useForm";
import validate from "../../validateInfo";
import "./register.css";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  const handleRegister = (data) => {
    console.log(data);
  };

  return (
    <div class="container">
      <div class="register">
        <form class="container" onSubmit={handleSubmit(handleRegister)}>
          <h1>Register</h1>
          <input
            type="email"
            placeholder="email"
            name="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid e-mail address",
              },
            })}
          />
          {errors.email && (
            <p
              style={{
                color: "red",
                fontWeight: "550",
                fontFamily: "cursive",
              }}
            >
              {errors.email.message}
            </p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              required: "You must specify a password",
              minLength: {
                value: 8,
                message: "Password must have at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p
              style={{
                color: "red",
                fontWeight: "550",
                fontFamily: "cursive",
              }}
            >
              {errors.password.message}
            </p>
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current || "The passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p
              style={{
                color: "red",
                fontWeight: "550",
                fontFamily: "cursive",
              }}
            >
              {errors.confirmPassword.message}
            </p>
          )}
          <button type="submit">Register</button>
          <hr />
          <p>Or Sign up With</p> <hr />
          <ul>
            <li>
              <i class="fab fa-facebook-f fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-twitter fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-github fa-2x"></i>
            </li>
            <li>
              <i class="fab fa-linkedin-in fa-2x"></i>
            </li>
          </ul>
          <span class="copyright"> Ernestine &copy; 2021</span>
        </form>
      </div>
      <div class="login">
        <form class="container">
          <i class="fas fa-user-plus fa-5x"></i>
          <h2>Welcome</h2>
          <p>Already a member, proceed to login</p>
          <button>
            Login <i class="fas fa-arrow-circle-right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

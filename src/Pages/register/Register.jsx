import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import "./register.css";

function Register() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
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
    const user = {
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    setUsers([...users, user]);
    toast.success("register successful, please login");
    history.push("/login");
  };

  console.log(users);

  return (
    <div class="grid-container">
      <div class="grid-item item1">
        <i class="fas fa-user-plus fa-5x"></i>
        {/* <p style={{ fontSize: "52px" }}>LECTURER HUB</p> */}
      </div>
      <div class="grid-item">
        <div class="block">
          <a type="button" href="/register" class="btn btn1">
            Sign Up
          </a>
        </div>
        <div class="block1">
          <p style={{ fontSize: "16px" }}>Welcome</p>
          <p>Fill the form to have access to the booking services </p>
        </div>
        <div class="block2">Social Networks</div>
      </div>
      <div class="grid-item">
        <div class="block3">
          <a type="button" href="/login" class="btn btn-dark dark1">
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
                  required: "Email is required",
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
            <div class="input-container">
              <input
                type="password"
                className="input-field"
                name="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />

              <i class="fa fa-key icon"></i>
            </div>
            {errors.confirmPassword && (
              <p className="errorMessage">{errors.confirmPassword.message}</p>
            )}
            <label>
              <input
                type="checkbox"
                value=""
                name="remember"
                style={{ marginBottom: "15px" }}
              />{" "}
              By creating an account you agree to our{" "}
              <a href="#" style={{ color: "#fc804a" }}>
                Terms & Privacy
              </a>
              .
            </label>
            <div class="input-container" style={{ marginLeft: "310px" }}>
              <button
                type="submit"
                class="btn btn1"
                onClick={handleSubmit(handleRegister)}
              >
                Register<i class="fa fa-arrow-right icon1"></i>
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
}

export default Register;

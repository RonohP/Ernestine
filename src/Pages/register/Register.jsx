import React from "react";
import "./register.css";

function Register() {
  return (
    <div class="container">
      <div class="register">
        <div class="container">
          <h1>Register</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Register</button>
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
        </div>
      </div>
      <div class="login">
        <div class="container">
          <i class="fas fa-user-plus fa-5x"></i>
          <h2>Welcome</h2>
          <p>Already a member, proceed to login</p>
          <button>
            Login <i class="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;

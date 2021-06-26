import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="container">
      <div className="register">
        <div className="container">
          <h1>Register</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Register</button>
          <hr />
          <p>Or Sign up With</p> <hr />
          <ul>
            <li>
              <i className="fab fa-facebook-f fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-twitter fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-github fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-linkedin-in fa-2x"></i>
            </li>
          </ul>
          <span className="copyright"> Ernestine &copy; 2021</span>
        </div>
      </div>
      <div className="login">
        <div className="container">
          <i className="fas fa-user-plus fa-5x"></i>
          <h2>Welcome</h2>
          <p>Already a member, proceed to login</p>
          <button>
            Login <i className="fas fa-arrow-circle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;

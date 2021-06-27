import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div class="grid-container">
      <div class="grid-item item1">
        <i class="fas fa-user-plus fa-5x"></i>
        <p style={{ fontSize: "52px" }}>STUDENT HUB</p>
      </div>
      <div class="grid-item">
        <div class="block">
          <a type="button" href="/register" class="btn btn-dark dark1">Sign Up</a>
        </div>
        <div class="block1">
          <p style={{ fontSize: "16px" }}>Welcome</p>
          <p>Log in to access university class booking services </p>
        </div>
        <div class="block2">
          Social Networks
</div>
      </div>
      <div class="grid-item">
        <div class="block3">
          <a type="button" href="Login.jsx" class="btn btn1">Sign In</a>
        </div>
        <div class="block4">
          <form>
            <div class="input-container">
              <input class="input-field" type="email" placeholder="Email" />
              <i class="fa fa-envelope icon"></i>
            </div>
            <div class="input-container">
              <input class="input-field" type="password" placeholder="Password" />
              <i class="fa fa-key icon"></i>
            </div>
            <div class="input-container" style={{ marginLeft: "310px" }}>
              <button type="submit" class="btn btn1">Log in<i class="fa fa-arrow-right icon1"></i>
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


export default Login;

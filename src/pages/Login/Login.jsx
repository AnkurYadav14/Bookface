import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left-section">
          <div className="site-info">
            <h1>BookFace</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              incidunt cum adipisci praesentium at, reiciendis sunt, eveniet
              eaque quibusdam non unde dolorem molestias? Fugit, pariatur
              mollitia iure molestiae cumque quod.
            </p>
          </div>

          <div className="register-info">
            <span>Dont have an account?</span>
            <button>Register</button>
          </div>
        </div>

        <div className="right-section">
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

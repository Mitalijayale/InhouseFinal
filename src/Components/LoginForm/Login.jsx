import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Login.module.css";

function Login() {
  return (
    <div className={style.container}>
      <h3 className={style.textType}>PICT COMMITTEES</h3>
      <p>Login to manage the committees</p>
      <form>
        <div className={style.formGroup}>
          <div className="mb-3">
            <label className={style.username}>Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-4">
            <label className={style.password}>Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            {/* Use Link to navigate to the ResetPass page */}
            <Link to="/ResetPass" className={style.forgetPass}>
              Forgot Password?
            </Link>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

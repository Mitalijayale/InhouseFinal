import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./ResetPass.module.css";

function Reset() {
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

          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="button">
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Reset;

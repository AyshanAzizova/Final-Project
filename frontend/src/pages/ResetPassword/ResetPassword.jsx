import React from "react";
import "../SignIn/SignIn.css";

const ResetPassword = () => {
  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <h1>ResetPassword</h1>
        <form>
            <input placeholder="New Password"/>
            <input placeholder="Confirm Password"/>
            <button>SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;


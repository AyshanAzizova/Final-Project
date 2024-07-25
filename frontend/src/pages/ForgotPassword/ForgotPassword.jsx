import React from "react";
import '../SignIn/SignIn.css'
import { Link } from "react-router-dom";

const ForgotPassword = ({ onClose }) => {
  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form>
            <input placeholder="E-mail address"/>
            <button>RESET PASSWORD</button>
            <p><Link to='/resetPassword' style={{color:"black"}}>Cancel</Link></p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

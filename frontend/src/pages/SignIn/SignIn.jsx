import React from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = ({ onClose, onRegisterClick, onForgotPasswordClick }) => {
  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <h1>Sign In</h1>
        <h2>Great to have you back!</h2>
        <form>
        <p style={{cursor:"pointer"}}>Continue with Google</p>
            <input placeholder="E-mail address"/>
            <input placeholder="Password"/>
            <Link to='/forgotpassword'>Forgot your password?</Link>
            <button>SIGN IN</button>
            <p>Don’t have an account? <Link to='/signup'>Register now</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useRef } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/user.slice";

const SignIn = ({ onClose, onRegisterClick, onForgotPasswordClick }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async (requestBody) => {

    try {
      const response = await fetch("api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(response.status);

      if (!response.status===200) {
        alert(data.error);
      }else{
        dispatch(
          login({
            id: data._id
          })
        );
        navigate("/")
        if (emailRef.current) {
          emailRef.current.value = "";
        }
  
        if (passwordRef.current) {
          passwordRef.current.value = "";
        }if (emailRef.current) {
        emailRef.current.value = "";
      }

      if (passwordRef.current) {
        passwordRef.current.value = "";
      }
      }
      


      

      console.log(emailRef,passwordRef);



    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email,password);


    await submitForm({ email, password });

  };
  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <h1>Sign In</h1>
        <h2>Great to have you back!</h2>
        <form onSubmit={handleSubmit}>
        <p style={{cursor:"pointer"}}>Continue with Google</p>
            <input ref={emailRef} type="email"  placeholder="E-mail address"/>
            <input ref={passwordRef} placeholder="Password"/>
            <Link to='/forgotpassword'>Forgot your password?</Link>
            <button>SIGN IN</button>
            <p>Don’t have an account? <Link to='/signup'>Register now</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

import React, { useRef } from "react";
import "../SignIn/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/user.slice";

const AdminSignIn = ({ onClose, onRegisterClick, onForgotPasswordClick }) => {
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
      console.log(data);

      if (!response.status===200) {
        alert(data.error);
      }else if(data.isAdmin){
        dispatch(
          login({
            id: data._id
          })
        );
        navigate("/admin/products")
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
        <h1>ADMIN</h1>
        <h2 style={{marginBottom:"10px"}}>Sign In</h2>
        <form onSubmit={handleSubmit}>
            <input ref={emailRef} type="email"  placeholder="E-mail address"/>
            <input ref={passwordRef} placeholder="Password"/>
            <button>SIGN IN</button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;

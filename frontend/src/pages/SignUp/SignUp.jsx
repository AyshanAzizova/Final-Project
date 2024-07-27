import React from "react";
import "../SignIn/SignIn.css";

//Router
import { Link, useNavigate } from "react-router-dom";

//React hooks
import { useRef } from "react";

//Redux Types
import { AppDispatch } from "../../store/store.js";

//Redux hooks
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user.slice.js";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const fullNameRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const fullName = fullNameRef.current?.value;
    const password = passwordRef.current?.value;

    // console.log(email, fullName, password);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, fullName, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);

        return;
      }

      console.log(data);

      dispatch(
        setUser({
          email: data.email,
          fullName: data.fullName,
          password: data.password,
          isAdmin: data.isAdmin,
          _id: data._id,
        })
      );

      if (emailRef.current) {
        emailRef.current.value = "";
      }

      if (passwordRef.current) {
        passwordRef.current.value = "";
      }

      if (fullNameRef.current) {
        fullNameRef.current.value = "";
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="user-modal">
      <div className="user-modal-content">
        <h1>Sign Up</h1>
        <h2>Create an account</h2>
        {/*Submit Form*/}
        <form onSubmit={handleSubmit}>
          <p style={{ cursor: "pointer" }}>Continue with Google</p>
          <input ref={fullNameRef} placeholder="FullName" />
          <input ref={emailRef} placeholder="E-mail address" />
          <input ref={passwordRef} placeholder="Password" />
          <button>SIGN UP</button>
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
          <p>
            Forgot your password? <Link to="/forgotpassword">Reset it</Link>
          </p>
        </form>
        {/*Submit Form End*/}
      </div>
    </div>
  );
};

export default SignUp;

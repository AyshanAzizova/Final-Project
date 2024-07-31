import React from "react";
import "../SignIn/SignIn.jsx";

//Router
import { Link, useNavigate } from "react-router-dom";

//React hooks
import { useRef } from "react";

//Redux Types
// import { AppDispatch } from "../../store/store.js";

//Redux hooks
import { useDispatch } from "react-redux";
import { login } from "../../slices/user.slice.js";

const SignUp = () => {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const dicpatch = useDispatch();
  const navigate = useNavigate();


  const submitForm = async (requestBody) => {

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
      }

      console.log(data);
      dicpatch(
        login({id: data._id})
      );

      if (emailRef.current) {
        emailRef.current.value = "";
      }
      if (fullNameRef.current) {
        fullNameRef.current.value = "";
      }
      if (passwordRef.current) {
        passwordRef.current.value = "";
      }
      
      console.log(emailRef,fullNameRef,passwordRef);

      navigate("/signin")

    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await submitForm({fullName,email,password});
  }


  // const handleGoogleLogin = async () => {
  //   // const data = await signInWithPopup(auth, provider);
  //   // const { displayName: fullName, email } = data.user;
  //   // const { uid: password } = data.user.providerData[0];

  //   console.log(password);

  //   const firstName = fullName.split(' ')[0]
  //   const lastName = fullName.split(' ')[1]


  //   if (!firstName || !lastName || !email || !password) {
  //     return;
  //   }

  //   await submitForm({ firstName, lastName, email, password });

  //   navigate("/")
  // }
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

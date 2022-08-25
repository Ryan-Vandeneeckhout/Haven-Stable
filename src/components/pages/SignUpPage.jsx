import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../firebase/useSignup.js";
import OnBoardingSectionWrapper from "../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingSectionContainer from "../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import EmailAndPasswordComponent from "../inputs/EmailAndPasswordComponent.jsx";
import EmailAndPasswordInput from "../inputs/EmailAndPassInput.jsx";

const SignUpPage = () => {
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorAPI, setErrorPassword] = useState("");
  const [passWordError, setPassWordError] = useState(false);
  const [username, setUserName] = useState(""); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useSignup();
  const ConfirmPassWordText = "Confirm Password";
  const [errorText, setErrorText] = useState(false);

  const navigate = useNavigate();

  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleMouseOut = () => {
    let input = document.getElementsByClassName("inputSelectedByUser");
    for (let i = 0; i < input.length; i++)
      input[i].classList.remove("inputSelectedByUser");
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      passwordRef.current.classList.add("errorForm");
      confirmPasswordRef.current.classList.add("errorForm");
      setPassWordError(true);
      setErrorPassword("Password does not match. Please try again.");
    }

    if (password === "") {
      setErrorPassword("Password cannot be blank.");
      passwordRef.current.classList.add("errorForm");
    }

    if (!password.includes("@")) {
      passwordRef.current.classList.add("errorForm");
      setPassWordError(true);
      setErrorPassword(
        "Password needs to include an @ symbol. Please try again."
      );
    }
    if (
      password === confirmpassword &&
      password.includes("@") &&
      password.length > 4
    ) {
      passwordRef.current.classList.remove("errorForm");
      confirmPasswordRef.current.classList.remove("errorForm");
      passwordRef.current.classList.add("successForm");
      confirmPasswordRef.current.classList.add("successForm");
      setPassWordError(false);
      
      signup(email, password, username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("username", username)
      
      setTimeout(function () {
        navigate('/flu');
      }, 1000);
    }
      /* const axios = require('axios');
      const data = JSON.stringify({
        password: password,
        email: email,
        username: username
      });
      
      const config = {
        method: 'post',
        url: 'https://haven-nodejs.herokuapp.com/auth/register',
        headers: { "Content-Type": "application/json" },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("token", response.data.token);
        
        emailRef.current.classList.add("successForm");
        setTimeout(function () {
          navigate('/flu');
        }, 1000);

      })
        .catch(function (error) {
        if (error.response.data === "user already exists") {
          emailRef.current.classList.add("errorForm");
          setErrorText(true);
        }
        else {
          console.log("Servor error check logs")
       }
      });

    } */
  };
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <div className="upperContent">
          <h2>Join haven today</h2>
          <p>
            By Continuing, you agree to our{" "}
            <Link to={"/terms"}>
              <b>Terms of Use</b>{" "}
            </Link>
            and our <b>Privacy Policy</b>
          </p>
        </div>
        <div className="middleContent">
          <form className="textForm" onSubmit={HandleSubmit}>
            {errorText ? (
              <p className="errorAlert">
                <span className="errorIcon" />
                Email is Unavailable. Please choose a Different Email!
              </p>
            ) : null}
            <EmailAndPasswordComponent
              onClick={handleMouseOut}
              password={password}
              email={email}
              setEmail={setEmail}
              setPassword={setPassword}
              InputRef={passwordRef}
              EmailRef={emailRef}
            />
  
            <EmailAndPasswordInput
              InputRef={confirmPasswordRef}
              valueInput={ConfirmPassWordText}
              valueText={ConfirmPassWordText}
              valueType={"password"}
              setValue={setConfirmPassword}
              value={confirmpassword}
            />
            <EmailAndPasswordInput
              valueInput={"Username required..."}
              valueText={"Username"}
              setValue={setUserName}
              value={username}
              InputRef={usernameRef}
            />
            {passWordError ? <p className="redColour">{errorAPI}</p> : null}
            <button>Sign Up</button>
          </form>
        </div>
        <div className="bottomContent">
          <p className="paraAccount">Already have an Account?</p>
          <p>
            Log in{" "}
            <b>
              <Link to={`/login`}>Here</Link>
            </b>
          </p>
        </div>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default SignUpPage;

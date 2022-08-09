import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import OnBoardingSectionWrapper from "../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingSectionContainer from "../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import EmailAndPasswordComponent from "../inputs/EmailAndPasswordComponent.jsx";
import EmailAndPasswordInput from "../inputs/EmailAndPassInput.jsx";

const SignUpPage = (props) => {
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorAPI, setErrorPassword] = useState("");
  const [passWordError, setPassWordError] = useState(false);
  const ConfirmPassWordText = "Confirm Password";
  const navigate = useNavigate();
  let broswerErrorCheck = null;
  const EmailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const HandleSubmit = async (e) => {
    e.preventDefault();

    if (props.password !== confirmpassword) {
    passwordRef.current.classList.add("errorForm");
      confirmPasswordRef.current.classList.add("errorForm");
      setPassWordError(true);
      setErrorPassword("Password does not match. Please try again.");
    }

    if (!props.password.includes("@")) {
        passwordRef.current.classList.add("errorForm");
      setPassWordError(true);
      setErrorPassword(
        "Password needs to include an @ symbol. Please try again."
      );
    }
    if (
      props.password === confirmpassword &&
      props.password.includes("@") &&
      props.password.length > 4
    ) {
    passwordRef.current.classList.remove("errorForm");
      confirmPasswordRef.current.classList.remove("errorForm");
      passwordRef.current.classList.add("successForm");
      confirmPasswordRef.current.classList.add("successForm");
      setPassWordError(false);
      try {
        const body = { email: props.email };
        console.log(body);
        const response = await fetch(
          "https://haven-nodejs.herokuapp.com/auth/email",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        broswerErrorCheck = await response.json();
      } catch (error) {
        if (broswerErrorCheck === true) {
        }
      }
      if (broswerErrorCheck === true) {
        EmailRef.current.classList.add("successForm");
          setTimeout(function () {
            navigate('/interests')
          }, 4000);
      } else {
        EmailRef.current.classList.add("errorForm");
      }
      }
      props.passData(); 
  };
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <div className="upperContent">
          <h2>Join Haven Today</h2>
          <p>
            By Continuing, you agree to our{" "}
            <Link to={"/terms"}>
              <b>Terms of Use</b>{" "}
            </Link>
            and our <b>Privacy Policy</b>
          </p>
        </div>
        <div className="middleContent">
          <form onSubmit={HandleSubmit}>
            {broswerErrorCheck === false && (
              <p>Email is Unavailable. Please choose a Different Email!</p>
            )}
            <EmailAndPasswordComponent
              password={props.password}
              email={props.email}
              setEmail={props.setEmail}
              setPassword={props.setPassword}
              InputRef={passwordRef}
              EmailRef={EmailRef}
            />
            <EmailAndPasswordInput
              InputRef={confirmPasswordRef}
              valueInput={ConfirmPassWordText}
              valueText={ConfirmPassWordText}
              valueType={"password"}
              setValue={setConfirmPassword}
              value={confirmpassword}
            />
            {passWordError ? <p className="redColour">{errorAPI}</p> : null}
            <button>Sign Up</button>
          </form>
        </div>
        <div className="bottomContent">
          <p>Already have an Account?</p>
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

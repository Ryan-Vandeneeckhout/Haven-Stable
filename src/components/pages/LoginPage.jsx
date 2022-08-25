import "../sass/_onBoarding.scss";

import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import useState from "react-usestateref";
import EmailAndPasswordInput from "../inputs/EmailAndPassInput";
import InputLinked from "../inputs/InputLinked";
import OnBoardingSectionWrapper from "../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../wrappers/onboardingWrappers/OnBoardingSectionContainer";
import { useLogin } from "../firebase/useLogin";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAPI, setErrorAPI] = useState(null);
  const [successAPI, setsuccessAPI] = useState(null);
  const EmailText = "Email";
  const PassText = "Password";
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const navigate = useNavigate();
  const { login } = useLogin();

  let broswerErrorCheck = "";

  const HandleSubmit = async (e) => {
    login(email, password); 
    e.preventDefault();
    
    try {
      const body = { email: email, password: password };
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      broswerErrorCheck = await response.json();
      localStorage.setItem("token", broswerErrorCheck.token);
    } catch (error) {
      if (broswerErrorCheck === "password or email is incorrect") {
        setErrorAPI(true);
      }
    }
    if (broswerErrorCheck === "password or email is incorrect") {
      setErrorAPI(true);
      passwordRef.current.style.color = "red";
      passwordRef.current.style.border = "red solid 2px";
      emailRef.current.style.color = "red";
      emailRef.current.style.border = "red solid 2px";
    } else {
      setsuccessAPI(true);
      props.UserAuth();
      navigate("/");
    }
  };
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
      <div className="upperLogo">
        <h2 className="Logo">haven</h2>
      </div>
        <div className="upperContent">
          <h2>Welcome Back</h2>
          <p>Log in to continue.</p>
        </div>
        <div className="middleContent">
          {errorAPI && (
            <p className="errorAlert">
              <span className="errorIcon" />
              Error please check your email and password again!
            </p>
          )}
          {successAPI && (
            <p>Success you will be redirected to the homepage shortly!</p>
          )}

          <form className="textForm" onSubmit={HandleSubmit}>
            <EmailAndPasswordInput
              valueInput={EmailText}
              valueText={EmailText}
              valueType={EmailText}
              setValue={setEmail}
              value={email}
              InputRef={emailRef}
            />
            <EmailAndPasswordInput
              valueInput={PassText}
              valueText={PassText}
              valueType={PassText}
              setValue={setPassword}
              value={password}
              InputRef={passwordRef}
            />
            <button>Log In</button>
          </form>
        </div>
        <p className="paraAccount">
          Need an Account? Sign Up{" "}
          <Link to={"/signup"}>
            <b>Here.</b>
          </Link>
        </p>
        <p>Forgot Password?</p>
      </OnBoardingSectionWrapper>
      <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"backButtonContainer"}
            Linked={"/"}
          />
        </OnBoardingUpperContentWrapper>
    </OnBoardingSectionContainer>
  );
};
export default LoginPage;

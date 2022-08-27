import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";
import ProgressBarWidth from "../../inputs/ProgressBarWidth.jsx";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { db } from "../../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";

const OnBoardingFLU = (props) => {
  const { user } = useAuthContext();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorText, setErrorText] = useState(false);
  const [errorTextFill, setErrorTextFill] = useState(false);
  const [success, setSuccess] = useState(false);
  const [username, setUserName] = useState("");
  const errorTextClick = "please fill out the fields first!";

  const formSubmit = (e) => {
    e.preventDefault();
    writeUserData();
    const axios = require("axios");
    const data = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      username: username,
    });

    const config = {
      method: "put",
      url: "https://haven-nodejs.herokuapp.com/onboarding/name",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function () {
        setSuccess(true);
      })
      .catch(function (error) {
        if (error.response.data === "not authorized") {
          setErrorText(true);
        }
      });
  };
  const writeUserData = async () => {
    await setDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      uid: user.uid,
      first_name: firstName,
      last_name: lastName,
      username: username,
      onboarding: true,
    });
    setSuccess(true);
    setErrorText(false);
    setErrorTextFill(false);
  };

  const errorPleaseFill = () => {
    setErrorTextFill(true);
  };

  return (
    <OnBoardingSectionContainer>
      <h2 className="havenLogo">haven</h2>
      <OnBoardingSectionWrapper>
        <ProgressBarWidth stepCreation="account" widthGreen={"12.5%"} widthGrey={"87.5%"} />
        <h2>what is your name?</h2>
        {errorText ? (
          <p className="errorAlert">
            <span className="errorIcon" />
            Something went wrong please reload the app!
          </p>
        ) : null}

        {errorTextFill ? (
          <p className="errorAlert">
            <span className="errorIcon" />
            {errorTextClick}
          </p>
        ) : null}
        <OnBoardingContentWrapper>
          <form className="textForm" onSubmit={formSubmit}>
            <EmailAndPasswordInput
              valueInput={"First Name (Optional)..."}
              valueText={"First Name"}
              setValue={setFirstName}
              value={firstName}
              InputRef={firstNameRef}
              callFunction={formSubmit}
            />
            <EmailAndPasswordInput
              valueInput={"Last Name (Optional)..."}
              valueText={"Last Name"}
              setValue={setLastName}
              value={lastName}
              InputRef={lastNameRef}
              callFunction={formSubmit}
            />
            <EmailAndPasswordInput
              valueInput={"Username required..."}
              valueText={"Username"}
              setValue={setUserName}
              value={username}
              InputRef={usernameRef}
            />
            <button type="submit">Submit</button>
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="paraAccount">
            Your Name will not be shown unless you select "show" in your profile
            settings.
          </p>
        </OnBoardingContentWrapperBottom>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/signup"}
          />
          {success ? (
            <InputLinked
              ButtonText={"Next"}
              ButtonClass={"nextButton"}
              ButtonClassContainer={"upperButtonContainer"}
              Linked={"/location"}
            />
          ) : (
            <div className="buttonContainer upperButtonContainer">
              <div onClick={errorPleaseFill} className="nextButton grey">
                Next{" "}
                <FontAwesomeIcon
                  className="iconArrow"
                  icon="fas fa-angle-right"
                />
              </div>
            </div>
          )}
        </OnBoardingUpperContentWrapper>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingFLU;

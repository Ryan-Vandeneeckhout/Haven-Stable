import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";
import ProgressBar from "../../inputs/ProgressBar";
import { useRef, useState } from "react";

const OnBoardingFLU = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorText, setErrorText] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();

    const axios = require("axios");
    const data = JSON.stringify({
      first_name: firstName,
      last_name: lastName,
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
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        if (error.response.data === "not authorized") {
          setErrorText(true);
        }
      });
  };

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/signup"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/location"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={0} green={7} grey={1} />
        {errorText ? (
          <p className="errorAlert">
            <span className="errorIcon" />
            Something went wrong please reload the app!
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
            <button type="submit">Submit</button>
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="paraAccount">
            Your Name will not be shown unless you select "show" in your profile
            settings.
          </p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingFLU;

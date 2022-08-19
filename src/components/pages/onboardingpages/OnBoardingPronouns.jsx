import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";
import { useRef, useState } from "react";
import CheckboxInput from "../../inputs/CheckboxInput";

const OnBoardingPronouns = () => {
  const PronounsText = "Type here for other options";
  const pronounRef = useRef();
  const [pronouns, setPronouns] = useState("");

  const handlePronouns = (e) => {
    setPronouns(e.target.value);

    const axios = require("axios");
    const data = JSON.stringify({
      pronouns: pronouns,
    });

    const config = {
      method: "put",
      url: "https://haven-nodejs.herokuapp.com/onboarding/pronouns",
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
            Linked={"/location"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/interests"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={2} green={5} grey={1} />
        <h2>What are your preferred pronouns?</h2>
        <OnBoardingContentWrapper>
          <form className="textForm">
            <div className="checkboxContainer">
              <CheckboxInput
                handleSubmitChange={handlePronouns}
                valueText={"SHE/HER"}
              />
              <CheckboxInput
                handleSubmitChange={handlePronouns}
                valueText={"HE/HIM"}
              />
              <CheckboxInput
                handleSubmitChange={handlePronouns}
                valueText={"THEY/THEM"}
              />
              <CheckboxInput
                handleSubmitChange={handlePronouns}
                valueText={"XE/XIM/XIRS"}
              />
            </div>
            <EmailAndPasswordInput
              valueInput={PronounsText}
              valueText={PronounsText}
              setValue={setPronouns}
              value={pronouns}
              InputRef={pronounRef}
            />
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="pronounsPara">Note: You can always change it later.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingPronouns;

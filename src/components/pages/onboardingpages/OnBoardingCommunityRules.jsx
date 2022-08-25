import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer.jsx";

import { useState, useRef } from "react";
import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OnBoardingCommunityRules = () => {
  const [success, setSuccess] = useState(false);
  const checkboxRef = useRef(null);

  const handleInputCheckSelect = () => {
    setSuccess(!success);
  };

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
       <h2>haven</h2>
        <ProgressBar setgreen={6} grey={1} green={1} />
        <h2>haven community rules</h2>
        <OnBoardingContentWrapper>
          <form>
            <p className="communityRules">
              Be respectful, be genuine. Respect member’s privacy. Report
              catfishing. No transphobia, no racism, no fatphobia, no ableism,
              no religious discrimination. No hate speech or bullying of any
              kind. We reserve the rights to delete any profiles that violate
              the community rules.
            </p>
            <div className="acceptCondtions">
              <input
                type="checkbox"
                className="checkbox"
                id="conditions"
                name="conditions"
                ref={checkboxRef}
                onChange={handleInputCheckSelect}
              />
              <label htmlFor="conditions">
                ACCEPT
              </label>
            </div>
          </form>
        </OnBoardingContentWrapper>
      </OnBoardingSectionWrapper>
      <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/birthday"}
          />
          {success ? (
            <InputLinked
              ButtonText={"Next"}
              ButtonClass={"nextButton"}
              ButtonClassContainer={"upperButtonContainer"}
              Linked={"/avatars"}
            />
          ) : (
            <div className="buttonContainer upperButtonContainer">
              <div className="nextButton grey"><span>Next <FontAwesomeIcon className="iconArrow" icon="fas fa-angle-right" /></span></div>
            </div>
          )}
        </OnBoardingUpperContentWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingCommunityRules;

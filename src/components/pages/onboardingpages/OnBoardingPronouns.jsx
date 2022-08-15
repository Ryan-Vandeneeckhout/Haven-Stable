import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";
import { useRef } from "react";

const OnBoardingPronouns = (props) => {
  const PronounsText = "Type here for other options";
  const pronounRef = useRef();

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
          <form>
            <div className="checkboxContainer">
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="conditions"
                  name="conditions"
                />
                <label htmlFor="conditions">SHE/HER</label>
              </div>
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="conditions"
                  name="conditions"
                />
                <label htmlFor="conditions">HE/HIM</label>
              </div>
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="conditions"
                  name="conditions"
                />
                <label htmlFor="conditions">THEY/THEM</label>
              </div>
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="conditions"
                  name="conditions"
                />
                <label htmlFor="conditions">XE/XIM/XIRS</label>
              </div>
            </div>
            <EmailAndPasswordInput
              valueInput={PronounsText}
              valueText={PronounsText}
              setValue={props.setPronouns}
              value={props.pronouns}
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

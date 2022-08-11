import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer.jsx";

import { useRef } from "react";
import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";

const OnBoardingBirthday = (props) => {

  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

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
            Linked={"/flu"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={1} grey={6} />
        <h1>When is your Birthday?</h1>
        <OnBoardingContentWrapper>
          <form className="birthdayForm">
            <EmailAndPasswordInput
              valueInput={"dd..."}
              valueText={"Day"}
              setValue={props.setDay}
              value={props.day}
              InputRef={dayRef}
            />
            <EmailAndPasswordInput
              valueInput={"mm..."}
              valueText={"Month"}
              setValue={props.setMonth}
              value={props.month}
              InputRef={monthRef}
            />
            <EmailAndPasswordInput
              valueInput={"yy..."}
              valueText={"Year"}
              setValue={props.setYear}
              value={props.year}
              InputRef={yearRef}
            />

          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p>User Must be 18 Years or older to use Haven.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingBirthday;

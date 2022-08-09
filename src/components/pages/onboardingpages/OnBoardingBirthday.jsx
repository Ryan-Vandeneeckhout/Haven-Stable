import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer.jsx"; 

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";

const OnBoardingBirthday = (props) => {
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
            Linked={"/createuser"}
          />
      </OnBoardingUpperContentWrapper>
      <ProgressBar green={6} grey={0} />
        <h1>When is your Birthday?</h1>
      <OnBoardingContentWrapper>
        <form>
          <label htmlFor="birthday">Birthday:</label>
          <input type="date" id="birthday" name="birthday" />
          <input type="submit" value="Submit" />
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

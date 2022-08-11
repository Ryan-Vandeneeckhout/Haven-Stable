import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";

const OnBoardingPronouns = (props) => {
    const PronounsText = "Pronouns eg: He/Him";

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
        <ProgressBar green={4} grey={3} />
        <h2>Choose Your Pronouns</h2>
        <OnBoardingContentWrapper>
        <form>
        <EmailAndPasswordInput
          valueInput={PronounsText}
          valueText={PronounsText}
          setValue={props.setPronouns}
          value={props.pronouns}
        />
      </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="pronounsPara">You can always change them later.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingPronouns;

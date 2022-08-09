import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
const OnBoardingCountryProvinceTownSelector = (props) => {
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={1} grey={5} />
        <h2>Where are you located?</h2>
        <OnBoardingContentWrapper>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            beatae culpa quidem corrupti perspiciatis pariatur dignissimos, vel
            blanditiis possimus aperiam veniam nisi tempora quasi. Quos
            exercitationem pariatur ducimus commodi numquam? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Molestias aliquam iusto, eum
            numquam adipisci rem impedit distinctio quia magni similique!
            Placeat enim molestiae perspiciatis, eaque cum modi suscipit
            similique officiis.
          </p>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p>Bottom Content of on Boarding </p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingCountryProvinceTownSelector;

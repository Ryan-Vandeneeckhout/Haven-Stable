import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import OnBoardingAvatarimg from "./OnBoardingAvatarimg";
import { JingAvatarMap } from "./JingAvatarmap";

const OnBoardingAvatars = () => {

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <h2>haven</h2>
        <ProgressBar setgreen={7} green={0} grey={1} />
        <h2 className="titleOnboardingh2">please pick an animal avatar</h2>
        <p className="tips">TIPS: you can always change it later.</p>
        <OnBoardingContentWrapper>
          <div className="Avatars">
            {JingAvatarMap.map((item, index) => {
              return <OnBoardingAvatarimg key={index} AvatarImg={item.AvatarImg} />;
            })}
          </div>
        </OnBoardingContentWrapper>
      </OnBoardingSectionWrapper>
      <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/communityrules"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/createuser"}
          />
        </OnBoardingUpperContentWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingAvatars;

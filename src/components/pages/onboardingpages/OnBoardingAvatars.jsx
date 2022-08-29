import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBarWidth from "../../inputs/ProgressBarWidth";
import OnBoardingAvatarimg from "./OnBoardingAvatarimg";
import { JingAvatarMap } from "./JingAvatarmap";

const OnBoardingAvatars = () => {

  return (
    <OnBoardingSectionContainer>
    <h2 className="havenLogo">haven</h2>
      <OnBoardingSectionWrapper>
        <ProgressBarWidth stepCreation="profile creation" widthGreen={"100%"} widthGrey={"0%"} />
        <h2>please pick an animal avatar</h2>
        <p className="tips">TIP: you can always change it later.</p>
        <OnBoardingContentWrapper>
          <div className="Avatars">
            {JingAvatarMap.map((item, index) => {
              return <OnBoardingAvatarimg key={index} AvatarImg={item.AvatarImg} />;
            })}
          </div>
        </OnBoardingContentWrapper>
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
      </OnBoardingSectionWrapper>
     
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingAvatars;

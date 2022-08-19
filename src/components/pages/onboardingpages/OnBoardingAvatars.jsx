import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import OnBoardingAvatarimg from "./OnBoardingAvatarimg";

const OnBoardingAvatars = (props) => {

  let n = 9;
  let AvatarMap = props.shuffled.slice(0, n);
  console.log(AvatarMap);

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
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
        <ProgressBar setgreen={7} green={0} grey={1} />
        <h2>Pick an Avatar</h2>
        <p>Note: you can always change the avatar later.</p>
        <OnBoardingContentWrapper>
          <div className="Avatars">
            {AvatarMap.map((item, index) => {
              return <OnBoardingAvatarimg passData={props.passData} setAvatar={props.setAvatar} key={index} numbers={item} />;
            })}
          </div>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p>Pick a Cute Avatar to show your sense of style!</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingAvatars;

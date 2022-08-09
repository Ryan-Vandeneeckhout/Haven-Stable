import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import OnBoardingAvatarimg from "./OnBoardingAvatarimg";

const OnBoardingAvatars = (props) => {
  let n = 16;
  let array = Array.from({ length: 50 }, (v, k) => k * 10);
  let shuffled = array.sort(function () {
    return 0.5 - Math.random();
  });

  let AvatarMap = shuffled.slice(0, n);
  console.log(AvatarMap);

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/flu"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/birthday"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={5} grey={1} />
        <h2>Avatars:</h2>
        <OnBoardingContentWrapper>
          <div className="Avatars">
            {AvatarMap.map((item, index) => {
              return <OnBoardingAvatarimg passData={props.passData} avatarUrl={props.avatarUrl} key={index} numbers={item} />;
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

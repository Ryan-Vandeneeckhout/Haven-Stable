import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import { OnBoardingInterestsMap } from "./OnBoardingInterestsMap";
import TaglistIndivdualButton from "./TaglistIndividualButton";
import useStateRef from "react-usestateref";

const OnBoardingInterests = (props) => {
  const [, setTagValue, tagValueRef] = useStateRef(null);

  const tagArray = () => {
    //If the Taglist Array Does not Contain the Selection
    if (!props.tagsarray.includes(tagValueRef.current)) {
      props.setTagsArray(() => [...props.tagsarray, tagValueRef.current]);
      props.passData();
     
    } else {
      props.setTagsArray(props.tagsarray.filter((item) => item !== tagValueRef.current));
      props.passData();
    }
    console.log(props.tagsarray);
  };
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/pronouns"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/avatars"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={5} grey={2} />
        <h2>Help Us Get to Know You!</h2>
        <OnBoardingContentWrapper>
          <div className="interestsContainer">
            <ul>
              {OnBoardingInterestsMap.map((item, index) => {
                return (
                  <TaglistIndivdualButton
                    key={index}
                    ButtonClass={"interestButtons"}
                    InterestName={item.InterestName}
                    tagArray={tagArray}
                    setTagValue={setTagValue}
                  />
                );
              })}
            </ul>
          </div>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p>Selecting tags helps the Haven search function match you with users with similar interests.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingInterests;

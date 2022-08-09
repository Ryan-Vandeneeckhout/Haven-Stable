import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import { OnBoardingInterestsMap } from "./OnBoardingInterestsMap";
import TaglistIndivdualButton from "./TaglistIndividualButton";
import { useState } from "react";

const OnBoardingInterests = (props) => {
  const [tagValue, setTagValue] = useState("Haven");

  const tagArray = () => {
    console.log(props.tagsarray);
    //If the Taglist Array Does not Contain the Selection
    if (!props.tagsarray.includes(tagValue)) {
      props.setTagsArray(() => [...props.tagsarray, tagValue]);
      props.passData();
    } else {
      props.setTagsArray(props.tagsarray.filter((item) => item !== tagValue));
      props.passData();
    }
  };
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
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/flu"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={1} grey={5} />
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

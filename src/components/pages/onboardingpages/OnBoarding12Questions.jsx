import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import { useState } from "react";
import OnBoarding12QuestionsInput from "./OnBoarding12QuestionsInput";
import { JingQuestionList } from "./JingQuestionList";

const OnBoarding12Questions = (props) => {
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/interests"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/birthday"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={4} green={3} grey={1} />
        <OnBoardingContentWrapper>
          <p><b>
            Show off who you are as a person by filling a couple of moments
            cards that will be showcased on your profile</b>
          </p>

          <ul className="questionList">
            {JingQuestionList.slice(0, 3).map((item, index) => {
              return (
                <OnBoarding12QuestionsInput
                  key={index}
                  question={item.Question}
                  contentID={item.ContentID}
                />
              );
            })}
          </ul>
        </OnBoardingContentWrapper>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoarding12Questions;

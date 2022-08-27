import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBarWidth from "../../inputs/ProgressBarWidth";
import { useState } from "react";
import useStateRef from "react-usestateref";
import OnBoarding12QuestionsInput from "./OnBoarding12QuestionsInput";
import { JingQuestionList } from "./JingQuestionList";

import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";

const OnBoarding12Questions = () => {
  const [userInputMessage, setUserInputMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [tagsarray, setTagsArray, tagsArrayRef] = useStateRef([]);
  const [, setTagValue, tagValueRef] = useStateRef(null);

  const date = new Date().toJSON();
  const { user } = useAuthContext();
  const pushData = () => {
    setTagValue({ question: question, answer: userInputMessage });

    setTagsArray(() => [...tagsarray, tagValueRef.current]);

    console.log(tagsArrayRef.current);
    formSubmit();
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      moments: tagsArrayRef.current,
      timeMomentCreated: date,
    });
  };

  const formSubmit = () => {
    const axios = require("axios");
    const data = JSON.stringify({
      moments: JSON.stringify(tagsArrayRef.current),
    });

    const config = {
      method: "put",
      url: "https://haven-nodejs.herokuapp.com/onboarding/moments",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        if (error.response.data === "not authorized") {
        }
        console.log(error);
      });
  };

  return (
    <OnBoardingSectionContainer backgroundClass="heartBackground">
      <h2 className="havenLogo">haven</h2>
      <OnBoardingSectionWrapper>
        <ProgressBarWidth stepCreation="profile creation" widthGreen={"62.5%"} widthGrey={"37.5%"} />
        <h2>write a moment for your profile</h2>
        <OnBoardingContentWrapper>
          <p>
            <b>
              Take a moment to share a thought or two, this helps other likeminded people to connect with you, you can always edit them later. 
            </b>
          </p>

          <ul className="questionList">
            {JingQuestionList.slice(0, 3).map((item, index) => {
              return (
                <OnBoarding12QuestionsInput
                  setUserInputMessage={setUserInputMessage}
                  userInputMessage={userInputMessage}
                  setQuestion={setQuestion}
                  handleMoments={formSubmit}
                  pushData={pushData}
                  key={index}
                  question={item.Question}
                  contentID={item.ContentID}
                  QuestionPicture={item.QuestionPicture}
             
                />
              );
            })}
          </ul>
        </OnBoardingContentWrapper>
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
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoarding12Questions;

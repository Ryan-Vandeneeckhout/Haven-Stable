import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
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

  const date = new Date().toJSON().slice(0, 10);
  const { user } = useAuthContext();
  const pushData = () => {

    setTagValue({ question: question, answer: userInputMessage }); 
    
    setTagsArray(() => [...tagsarray, tagValueRef.current]);

    console.log(tagsArrayRef.current);
    writeUserData();
    formSubmit();
  }

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      moments: tagsArrayRef.current,
      timeMomentCreated: date,
    });
  };

  const formSubmit = () => {
    const axios = require("axios");
    const body = JSON.stringify({
      moments: tagsArrayRef.current,
    });
    console.log(body);
 
     const config = {
       method: "put",
       url: "https://haven-nodejs.herokuapp.com/onboarding/moments",
       headers: {
         token: localStorage.getItem("token"),
         "Content-Type": "application/json",
       },
       body: body,
     };
    
     axios(config)
       .then(function (response) {
         console.log(response.data);
       })
       .catch(function (error) {
         if (error.response.data === "not authorized") {
          console.log(error.response.data);
         }
       });
   };
  

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
                <OnBoarding12QuestionsInput setUserInputMessage={setUserInputMessage} userInputMessage={userInputMessage} setQuestion={setQuestion} handleMoments={formSubmit} pushData={pushData}
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

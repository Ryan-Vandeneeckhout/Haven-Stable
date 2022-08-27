import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBarWidth from "../../inputs/ProgressBarWidth.jsx";
import { OnBoardingInterestsMap } from "./OnBoardingInterestsMap";
import TaglistIndivdualButton from "./TaglistIndividualButton";
import useStateRef from "react-usestateref";
import { db } from "../../firebase/config";
import { updateDoc, doc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";

const OnBoardingInterests = () => {
  const [, setTagValue, tagValueRef] = useStateRef(null);
  const [tagsarray, setTagsArray, tagsArrayRef] = useStateRef([]);
  const { user } = useAuthContext();

  const tagArray = () => {
    if (!tagsarray.includes(tagValueRef.current)) {
      setTagsArray(() => [...tagsarray, tagValueRef.current]);
      callAPI(); 
      writeUserData();

    } else {
      setTagsArray(tagsarray.filter((item) => item !== tagValueRef.current));
      callAPI(); 
      writeUserData();
    }
    console.log(tagsArrayRef.current);
  };


  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      interests: tagsArrayRef.current,
    });
};

  const callAPI = () => {

    const axios = require("axios");
    const data = JSON.stringify({
      interests: JSON.stringify(tagsArrayRef.current),
    });

    const config = {
      method: "put",
      url: "https://haven-nodejs.herokuapp.com/onboarding/interests",
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
        console.log(error)
      });


  }
  return (
    <OnBoardingSectionContainer>
    <h2 className="havenLogo">haven</h2>
    <OnBoardingSectionWrapper>
      <ProgressBarWidth stepCreation="profile creation" widthGreen={"50%"} widthGrey={"50%"} />
      <h2>What are you interested in?</h2>
       
       
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
                    InterestBorderColour={item.InterestBorderColour}
                  />
                );
              })}
            </ul>
          </div>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="paraAccount">Selecting tags helps match you with users with similar interests.</p>
        </OnBoardingContentWrapperBottom>
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
            Linked={"/gettoknowyou"}
          />
        </OnBoardingUpperContentWrapper>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingInterests;

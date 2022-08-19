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

const OnBoardingInterests = () => {
  const [, setTagValue, tagValueRef] = useStateRef(null);
  const [tagsarray, setTagsArray, tagsArrayRef] = useStateRef([]);

  const tagArray = () => {
    if (!tagsarray.includes(tagValueRef.current)) {
      setTagsArray(() => [...tagsarray, tagValueRef.current]);
      callAPI(); 

    } else {
      setTagsArray(tagsarray.filter((item) => item !== tagValueRef.current));
      callAPI(); 

    }
    console.log(tagsArrayRef.current);
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
            Linked={"/gettoknowyou"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={3} green={4} grey={1} />
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
                  />
                );
              })}
            </ul>
          </div>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="paraAccount">Selecting tags helps the Haven search function match you with users with similar interests.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingInterests;

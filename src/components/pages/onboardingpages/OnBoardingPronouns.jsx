import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";

import { useRef } from "react";
import useStateRef from "react-usestateref";

import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";
import { useState } from "react";

const OnBoardingPronouns = () => {
  const PronounsText = "Type here for other options";
  const customRef = useRef();
  const [pronouns, setPronouns, pronounsRef] = useStateRef([]);
  const [pronounsCustom, setPronounCustom] = useState(""); 

  const { user } = useAuthContext();

  const handlePronouns = (e) => {
    if (!pronouns.includes(e.target.value)) {
      setPronouns([...pronouns, { pronoun: e.target.value }]);
    } else {
      setPronouns(pronouns.filter((item) => item !== e.target.value));

      if (pronouns.length === 0 || pronouns === []) {
        setPronouns([]);
      }
      console.log(pronounsRef.current);
    }
    writeUserData();

    const axios = require("axios");
    const data = JSON.stringify({
      pronouns: pronouns,
    });

    const config = {
      method: "put",
      url: "https://haven-nodejs.herokuapp.com/onboarding/pronouns",
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
      });
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      pronouns: pronounsRef.current,
      pronounsCustom: customRef.current.value, 
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
            Linked={"/location"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/interests"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={2} green={5} grey={1} />
        <h2>What are your preferred pronouns?</h2>
        <OnBoardingContentWrapper>
          <form className="textForm">
            <div className="checkboxContainer">
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="conditions"
                  value="SHE/HER"
                  onChange={handlePronouns}
                />
                <label htmlFor="conditions">SHE/HER</label>
              </div>

              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="conditions"
                  value="HE/HIM"
                  onChange={handlePronouns}
                />
                <label htmlFor="conditions">HE/HIM</label>
              </div>

              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="conditions"
                  value="THEY/THEM"
                  onChange={handlePronouns}
                />
                <label htmlFor="conditions">THEY/THEM</label>
              </div>
              <div className="acceptCondtions">
                <input
                  type="checkbox"
                  className="checkbox"
                  name="conditions"
                  value="XE/XIM/XIRS"
                  onChange={handlePronouns}
                />
                <label htmlFor="conditions">XE/XIM/XIRS</label>
              </div>
            </div>
            <EmailAndPasswordInput
              valueInput={PronounsText}
              valueText={PronounsText}
              setValue={setPronounCustom}
              value={pronounsCustom}
              InputRef={customRef}
            />
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="pronounsPara">Note: You can always change it later.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingPronouns;

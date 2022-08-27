import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import { useRef } from "react";
import React, { useState, useMemo } from "react";
import useStateRef from "react-usestateref";
import Select from "react-select";
import countryList from "react-select-country-list";

import InputLinked from "../../inputs/InputLinked";
import ProgressBarWidth from "../../inputs/ProgressBarWidth.jsx";

import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";

const OnBoardingCountryProvinceTownSelector = () => {
  const checkboxRef = useRef(null);
  const [value, setValue] = useState("");
  const [errorText, setErrorText] = useState(true);
  const [location, setLocation, locationRef] = useStateRef("");
  const { user } = useAuthContext();

  const options = useMemo(() => countryList().getData(), []);

  const [sharelocation, setShareLocation, sharelocationRef] =
    useStateRef(false);

  // Form Input setState
  const handleInputCheckSelect = () => {
    setShareLocation(!sharelocation);
    writeUserData();
  };

  const changeHandler = (value) => {
    setValue(value);
    setLocation(value);
    writeUserData();
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    writeUserData();
    const axios = require("axios");
    const data = JSON.stringify({
      location: location,
    });

    const config = {
      method: "put",
      url: "https://haven-nodejs.herokuapp.com/onboarding/location",
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
          setErrorText(true);
        }
      });
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      location: locationRef.current,
      sharelocation: sharelocationRef.current,
    });
  };
  return (
    <OnBoardingSectionContainer>
      <h2 className="havenLogo">haven</h2>
      <OnBoardingSectionWrapper>
        <ProgressBarWidth widthGreen={"25%"} widthGrey={"75%"} />
        <h2>Where are you located?</h2>
        {errorText ? null : <p>Something went Wrong please Reload the app!</p>}
        <OnBoardingContentWrapper>
          <form onSubmit={HandleSubmit}>
            <Select options={options} value={value} onChange={changeHandler} />
            {value ? null : <p className="agePara">Please Select a Location</p>}
            <div className="acceptCondtions">
              <input
                type="checkbox"
                className="checkbox"
                id="conditions"
                name="conditions"
                ref={checkboxRef}
                onChange={handleInputCheckSelect}
              />
              <label htmlFor="conditions">Share my location</label>
            </div>
          </form>
        </OnBoardingContentWrapper>
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
            Linked={"/pronouns"}
          />
        </OnBoardingUpperContentWrapper>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingCountryProvinceTownSelector;

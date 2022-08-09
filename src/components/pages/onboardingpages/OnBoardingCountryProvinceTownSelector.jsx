import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import { useRef } from "react";
import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";

const OnBoardingCountryProvinceTownSelector = (props) => {
  const checkboxRef = useRef(null);
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
      props.setLocation(value);
      props.passData(); 
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/avatars"}
          />
          <InputLinked
            ButtonText={"Next"}
            ButtonClass={"nextButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/birthday"}
          />
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={5} grey={1} />
        <h2>Where are you located?</h2>
        <OnBoardingContentWrapper>
          <form onSubmit={HandleSubmit}>
            <Select options={options} value={value} onChange={changeHandler} />
            {value ? null : <p>Please Select a Location</p>}
            <div className="acceptCondtions">
              <input
                type="checkbox"
                className="checkbox"
                id="conditions"
                name="conditions"
                ref={checkboxRef}
              />
              <label htmlFor="conditions">Share my location</label>
            </div>
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingCountryProvinceTownSelector;

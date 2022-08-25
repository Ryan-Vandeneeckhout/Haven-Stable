import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer.jsx";

import { useRef } from "react";
import InputLinked from "../../inputs/InputLinked";
import ProgressBar from "../../inputs/ProgressBar";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";
import { useState, useEffect } from "react";

import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";

const OnBoardingBirthday = (props) => {
  const [success, setSuccess] = useState(null);
  const [dayCheckRight, setDayCheckRight] = useState(null);
  const [monthCheckRight, setMonthCheckRight] = useState(null);
  const [yearCheckRight, setYearCheckRight] = useState(null);
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const [dayCal, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  
  const { user } = useAuthContext();

  const DayCheck = () => {
    if (props.dayCal > 31) {
      dayRef.current.classList.remove("successForm");
      dayRef.current.classList.add("errorForm");
      setDayCheckRight(false);
      setSuccess(false);
    } else {
      dayRef.current.classList.remove("errorForm");
      dayRef.current.classList.add("successForm");
      setDayCheckRight(true);
    }
  };

  const MonthCheck = () => {
    if (props.month > 12) {
      monthRef.current.classList.remove("successForm");
      monthRef.current.classList.add("errorForm");
      setMonthCheckRight(false);
      setSuccess(false);
    } else {
      monthRef.current.classList.remove("errorForm");
      monthRef.current.classList.add("successForm");
      setMonthCheckRight(true);
      
    }
  };

  const YearCheck = () => {
    if (props.year < 1900) {
      yearRef.current.classList.remove("successForm");
      yearRef.current.classList.add("errorForm");
      setYearCheckRight(false);
      setSuccess(false);
    } else if (props.year > 2022) {
      yearRef.current.classList.remove("successForm");
      yearRef.current.classList.add("errorForm");
      setYearCheckRight(false);
      setSuccess(false);
    } else {
      yearRef.current.classList.remove("errorForm");
      yearRef.current.classList.add("successForm");
      setYearCheckRight(true);
    }
  };

  const SuccessCheck = () => {
    if (
      dayCheckRight === true &&
      monthCheckRight === true &&
      yearCheckRight === true
    ) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    DayCheck();
    MonthCheck();
    YearCheck();
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      birthday: { dayCal, month, year }
    });
  };

  useEffect(() => {
    SuccessCheck(success);
  }, [success, SuccessCheck]);

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/gettoknowyou"}
          />
          {success ? (
            <InputLinked
              ButtonText={"Next"}
              ButtonClass={"nextButton"}
              ButtonClassContainer={"upperButtonContainer"}
              Linked={"/communityrules"}
            />
          ) : (
            <div className="buttonContainer upperButtonContainer">
              <div className="nextButton grey">Next <span className="imageButton"><img src="./assets/svg/arrow.svg" alt="Arrow"/></span></div>
            </div>
          )}
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={5} grey={1} green={2} />
        <h2>When is your birthday?</h2>
        <OnBoardingContentWrapper>
          <form className="birthdayForm" onSubmit={HandleSubmit}>
            <div className="birthdayFormInputContainer">
              <EmailAndPasswordInput
                valueInput={"dd"}
                valueType={"number"}
                valueText={"Day"}
                setValue={setDay}
                value={dayCal}
                InputRef={dayRef}
                min={"1"}
                max={"31"}
              />
              <EmailAndPasswordInput
                valueInput={"mm..."}
                valueText={"Month"}
                valueType={"number"}
                setValue={setMonth}
                value={month}
                InputRef={monthRef}
                min={"1"}
                max={"12"}
              />
              <EmailAndPasswordInput
                valueInput={"yy..."}
                valueText={"Year"}
                valueType={"number"}
                setValue={setYear}
                value={year}
                InputRef={yearRef}
                min={"1900"}
                max={"2020"}
              />
            </div>

            <button onClick={SuccessCheck}>Submit</button>
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="agePara">
            User Must be 18 Years or older to use Haven.
          </p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingBirthday;

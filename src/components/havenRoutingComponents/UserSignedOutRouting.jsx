import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import LoginPage from "../pages/LoginPage.jsx";
import LoginAndSignUpLandingPage from "../pages/LoginSignUpLandingPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import TermsandConditionsNewUser from "../pages/terms/TermsandConditionsNewUser.jsx";
import OnBoardingCountryProvinceTownSelector from "../pages/onboardingpages/OnBoardingCountryProvinceTownSelector.jsx";
import OnBoardingFLU from "../pages/onboardingpages/OnBoardingFLU.jsx";
import OnBoardingAvatars from "../pages/onboardingpages/OnBoardingAvatars.jsx";
import OnBoardingCreateUser from "../pages/onboardingpages/OnBoardingCreateUser.jsx";
import OnBoardingBirthday from "../pages/onboardingpages/OnBoardingBirthday.jsx";
import OnBoardingInterests from "../pages/onboardingpages/OnBoardingInterests.jsx";
import OnBoardingPronouns from "../pages/onboardingpages/OnBoardingPronouns.jsx";
import OnBoardingCommunityRules from "../pages/onboardingpages/OnBoardingCommunityRules.jsx";
import OnBoarding12Questions from "../pages/onboardingpages/OnBoarding12Questions.jsx";

const UserSignedOutInRouting = (props) => {
  const [text, setText] = useState("Creating User");
  const [location, setLocation] = useState("");
  const [dayCal, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  let sendUserData = {
  
  };

  const passData = () => {
  };

  return (
    <main>
      <div className="appWrapper">
        <Routes>
          <Route extact path="/" element={ <LoginAndSignUpLandingPage />}/>
          <Route extact path="/signup" element={<SignUpPage/>}/>
          <Route extact path="/terms" element={<TermsandConditionsNewUser />} />
          <Route extact path="/login" element={<LoginPage UserAuth={props.UserAuth} />}/>
          <Route extact path="/location" element={<OnBoardingCountryProvinceTownSelector/>}/>
          <Route extact path="/flu" element={<OnBoardingFLU/>}/>
          <Route extact path="/avatars" element={<OnBoardingAvatars passData={passData} shuffled={props.shuffled} />}/>
          <Route extact path="/interests" element={<OnBoardingInterests/>}/>
          <Route
            extact
            path="/createuser"
            element={
              <OnBoardingCreateUser
                text={text}
                setText={setText}
                sendUserData={sendUserData}
                passData={passData}
                UserAuth={props.UserAuth}
                isAuth={props.isAuth}
              />
            }
          />
          <Route extact path="/pronouns" element={<OnBoardingPronouns/>}/>
          <Route
            extact
            path="/birthday"
            element={
              <OnBoardingBirthday
                passData={passData}
                dayCal={dayCal}
                setDay={setDay}
                month={month}
                setMonth={setMonth}
                year={year}
                setYear={setYear}
              />
            }
          />
           <Route
            extact
            path="/communityrules"
            element={
              <OnBoardingCommunityRules
                passData={passData}
              />
            }
          />
           <Route
            extact
            path="/gettoknowyou"
            element={
              <OnBoarding12Questions
             
              />
            }
          />
        </Routes>
     {/*    <section className="canvasBoard">
          <Shapes />
          <div className="wrapper">
            <h1>Haven</h1>
          </div>
        </section> */}
      </div>
    </main>
  );
};

export default UserSignedOutInRouting;
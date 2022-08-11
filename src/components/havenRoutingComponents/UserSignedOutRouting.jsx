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
import Shapes from "../shapes/Shapes.jsx";

const UserSignedOutInRouting = (props) => {
  const [text, setText] = useState("Creating User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [tagsarray, setTagsArray] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  let sendUserData = {
    email: email,
    password: password,
    avatar_url: localStorage.avatar,
    myInterests: tagsarray,
    first_name: firstName,
    last_name: lastName,
    username: userName,
    location: location,
    pronouns: pronouns,
    birthday: day,
    month,
    year,
  };

  const passData = () => {
    const body = {
      email: email,
      password: password,
      avatar_url: localStorage.avatar,
      myInterests: tagsarray,
      first_name: firstName,
      last_name: lastName,
      username: userName,
      location: location,
      pronouns: pronouns,
      birthday: day,
      month,
      year,
    };
    console.log(body);
  };

  return (
    <main>
      <div className="appWrapper">
        <Routes>
          <Route
            extact
            path="/"
            element={
              <LoginAndSignUpLandingPage h1={"User Signed Out LandingPage"} />
            }
          />
          <Route
            extact
            path="/signup"
            element={
              <SignUpPage
                passData={passData}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route extact path="/terms" element={<TermsandConditionsNewUser />} />
          <Route
            extact
            path="/login"
            element={<LoginPage UserAuth={props.UserAuth} />}
          />
          <Route
            extact
            path="/location"
            element={
              <OnBoardingCountryProvinceTownSelector
                location={location}
                setLocation={setLocation}
                passData={passData}
              />
            }
          />
          <Route
            extact
            path="/flu"
            element={
              <OnBoardingFLU
                passData={passData}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setUserName={setUserName}
                username={userName}
              />
            }
          />
          <Route
            extact
            path="/avatars"
            element={<OnBoardingAvatars passData={passData} />}
          />
          <Route
            extact
            path="/interests"
            element={
              <OnBoardingInterests
                tagsarray={tagsarray}
                setTagsArray={setTagsArray}
                passData={passData}
              />
            }
          />
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
          <Route
            extact
            path="/pronouns"
            element={
              <OnBoardingPronouns
                setPronouns={setPronouns}
                pronouns={pronouns}
                passData={passData}
              />
            }
          />
          <Route
            extact
            path="/birthday"
            element={
              <OnBoardingBirthday
                passData={passData}
                day={day}
                setDay={setDay}
                month={month}
                setMonth={setMonth}
                year={year}
                setYear={setYear}
              />
            }
          />
        </Routes>
        <section className="canvasBoard">
          <Shapes />
          <div className="wrapper">
            <h1>Haven</h1>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UserSignedOutInRouting;

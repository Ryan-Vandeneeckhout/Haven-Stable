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
import { useRef } from "react";
import OnBoardingInterests from "../pages/onboardingpages/OnBoardingInterests.jsx";
import OnBoardingPronouns from "../pages/onboardingpages/OnBoardingPronouns.jsx";

const UserSignedOutInRouting = (props) => {
  const [text, setText] = useState("Creating User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [tagsarray, setTagsArray] = useState([]);
  const avatarUrlRef = useRef("./assets/profileAvatars/profileDefault.png");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [pronouns, setPronouns] = useState("");

  let sendUserData = {
    email: email,
    password: password,
    avatar_url: avatarUrlRef.current,
    myInterests: tagsarray,
    first_name: firstName,
    last_name: lastName,
    username: userName,
    location: location,
    pronouns: pronouns,
  };

  const passData = () => {
    const body = {
      email: email,
      password: password,
      avatar_url: avatarUrlRef.current,
      myInterests: tagsarray,
      first_name: firstName,
      last_name: lastName,
      username: userName,
      location: location,
      pronouns: pronouns,
    };
    console.log(body);
  };

  return (
    <main>
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
          element={
            <OnBoardingAvatars avatarUrl={avatarUrlRef}
            />
          }
        />
         <Route
          extact
          path="/interests"
          element={
            <OnBoardingInterests
            tagsarray={tagsarray} setTagsArray={setTagsArray} passData={passData}
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
            setPronouns={setPronouns} pronouns={pronouns} passData={passData}
            />
          }
        />
          <Route
          extact
          path="/birthday"
          element={
            <OnBoardingBirthday
              passData={passData}
            />
          }
        />
      </Routes>
    </main>
  );
};

export default UserSignedOutInRouting;

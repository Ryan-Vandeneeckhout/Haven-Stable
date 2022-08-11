import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import MyProfile from "../pages/MyProfile.js";

const UserSignInRouting = (props) => {
  window.history.replaceState(true, "Haven Home", "/");

  return (
    <main>
      <Routes>
        <Route extact path="/" element={<LandingPage />} />
        <Route extact path="/createuser" element={<Navigate to="/" />} />
        <Route exact path = "/myProfile" element = {<MyProfile/>}/>
      </Routes>
      <button onClick={props.UserAuth}>User {props.user}</button>
    </main>
  );
};

export default UserSignInRouting;

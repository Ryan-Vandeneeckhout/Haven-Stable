import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import MyProfile from "../pages/MyProfile.js";

const UserSignInRouting = () => {
  window.history.replaceState(true, "Haven Home", "/");

  return (
    <main>
      <Routes>
        <Route extact path="/" element={<LandingPage />} />
        <Route extact path="/createuser" element={<Navigate to="/" />} />

        <Route exact path = "/myProfile" element = {<MyProfile/>}/>
        <Route extact path="/interests" element={<Navigate to="/" />} />
        <Route extact path="/signup" element={<Navigate to="/" />} />
        <Route extact path="/login" element={<Navigate to="/" />} />
        <Route extact path="/avatars" element={<Navigate to="/" />} />
        <Route extact path="/flu" element={<Navigate to="/" />} />

      </Routes>
    </main>
  );
};

export default UserSignInRouting;

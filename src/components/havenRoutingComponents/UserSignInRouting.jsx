import { Routes, Route, Navigate } from "react-router-dom";
import MyProfile from "../pages/MyProfile.js";
import UserProfileLandingPage from "../pages/landingpage/UserProfileLandingPage.jsx";
import UserSearch from "../pages/UserSearch.js";
import ProfilePage from "../pages/landingpage/ProfilePage.jsx";

const UserSignInRouting = () => {
  window.history.replaceState(true, "Haven Home", "/");

  return (
    <main>
      <Routes>
        <Route extact path="/" element={<UserProfileLandingPage />} />
        <Route extact path="/createuser" element={<Navigate to="/" />} />
        <Route exact path="/myprofile" element={<MyProfile />} />
        <Route exact path="/users" element={<UserSearch />} />
        <Route extact path="/interests" element={<Navigate to="/" />} />
        <Route extact path="/signup" element={<Navigate to="/" />} />
        <Route extact path="/login" element={<Navigate to="/" />} />
        <Route extact path="/avatars" element={<Navigate to="/" />} />
        <Route extact path="/pronouns" element={<Navigate to="/" />} />
        <Route extact path="/flu" element={<Navigate to="/" />} />
        <Route path="/:postid" element={<ProfilePage />} />
      </Routes>
    </main>
  );
};

export default UserSignInRouting;

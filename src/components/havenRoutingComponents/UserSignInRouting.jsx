import { Routes, Route, Navigate } from "react-router-dom";
import UserProfileLandingPage from "../pages/landingpage/UserProfileLandingPage.jsx";
import UserProfilePage from "../firebase/UserProfilePage.jsx";
import MyProfilePage from "../firebase/User/MyProfilePage.jsx";
import MyFriends from "../firebase/User/MyFriends.jsx";
import MyMoments from "../firebase/User/MyMoments.jsx";
import MyEvents from "../firebase/User/MyEvents.jsx";

const UserSignInRouting = () => {
  window.history.replaceState(true, "Haven Home", "/");

  return (
    <main>
      <Routes>
        <Route extact path="/" element={<UserProfileLandingPage />} />
        <Route extact path="/createuser" element={<Navigate to="/" />} />
        <Route exact path="/myprofile" element={<MyProfilePage />} />
        <Route extact path="/interests" element={<Navigate to="/" />} />
        <Route extact path="/signup" element={<Navigate to="/" />} />
        <Route extact path="/login" element={<Navigate to="/" />} />
        <Route extact path="/avatars" element={<Navigate to="/" />} />
        <Route extact path="/pronouns" element={<Navigate to="/" />} />
        <Route extact path="/flu" element={<Navigate to="/" />} />
        <Route path="/:postuid" element={<UserProfilePage />} />
        <Route extact path="/account/myfriends" element={<MyFriends />} />
        <Route exact path="/account/mymoments" element={<MyMoments />} />
        <Route exact path="/account/myevents" element={<MyEvents />} />
      </Routes>
    </main>
  );
};

export default UserSignInRouting;

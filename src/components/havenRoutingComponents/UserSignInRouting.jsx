import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";

const UserSignInRouting = (props) => {
  window.history.replaceState(true, "Haven Home", "/");

  return (
    <main>
      <Routes>
        <Route extact path="/" element={<LandingPage />} />
        <Route extact path="/createuser" element={<Navigate to="/" />} />
      </Routes>
      <button onClick={props.UserAuth}>User {props.user}</button>
    </main>
  );
};

export default UserSignInRouting;

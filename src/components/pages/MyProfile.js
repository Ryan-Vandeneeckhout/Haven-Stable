import React from "react";
import UserCard from "../userPofile/UserCard";

function MyProfile() {
  const [userInfo, setUserInfo] = React.useState({});

  const getUserInfo = async () => {
    try {
      const res = await fetch("https://haven-nodejs.herokuapp.com/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
      });
      const parseRes = await res.json();
      setUserInfo(parseRes.myUser[0]);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <UserCard userInfo={userInfo} />
    </div>
  );
}

export default MyProfile;

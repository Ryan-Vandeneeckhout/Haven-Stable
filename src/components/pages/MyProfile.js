import React from "react";
import UserCard from "../userProfile/UserCard";

function MyProfile() {
  const [myInfo, setMyInfo] = React.useState({});
  const [myInterests, setUserInterests] = React.useState({});
  const [myActivities, setUserActivities] = React.useState({});

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
      setMyInfo(parseRes.myUser[0]);
      setUserInterests(parseRes.myInterests);
      setUserActivities(parseRes.myActivities);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <UserCard user={{ myInfo, myInterests, myActivities }} />
    </div>
  );
}

export default MyProfile;

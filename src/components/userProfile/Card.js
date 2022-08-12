import React from "react";
import UserInterest from "./UserInterest";

function UserCard(props) {
  console.log(props.user);
  return (
    <div>
      <div className="user_profile">
        <h2>{props.user.userInfo.username}</h2>
        <h3>{props.user.userInfo.first_name}</h3>
        <h3>{props.user.userInfo.last_name}</h3>
        <h4>{props.user.userInfo.pronouns}</h4>
        <h4>{props.user.userInfo.location}</h4>
      </div>
      <div classname="user_interests"></div>
    </div>
  );
}

export default UserCard;

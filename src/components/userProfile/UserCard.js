import React from "react";
import UserInterest from "./UserInterest";

function UserCard(props) {
  const arr = Array.from(props.user.myInterests);
  const interests = arr.map((interest) => {
    return <UserInterest interests={interest.interest} key = {interest.id}/>;
  });
  return (
    <div>
      <div className="user_profile">
        <img src={props.user.myInfo.avatar_url}></img>
        <h2>{props.user.myInfo.username}</h2>
        <h3>{props.user.myInfo.first_name}</h3>
        <h3>{props.user.myInfo.last_name}</h3>
        <h4>{props.user.myInfo.pronouns}</h4>
        <h4>{props.user.myInfo.location}</h4>
      </div>
      <div classname="user_interests">
        <ul>{interests}</ul>
      </div>
    </div>
  );
}

export default UserCard;

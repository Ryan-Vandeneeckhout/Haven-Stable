import React from "react";
import UserInterest from "./UserInterest";

function UserCard(props) {
  console.log(props.user);
  const arr = Array.from(props.user.userInterests);
  const interests = arr.map((interest) => {
    return <UserInterest interests={interest.interest} key={interest.id} />;
  });
  return (
    <div>
      <div className="user_profile">
        {/* <img src={props.user.myInfo.avatar_url}></img> */}
        <h2>{props.user.userInfo.username}</h2>
        <h3>{props.user.userInfo.first_name}</h3>
        <h3>{props.user.userInfo.last_name}</h3>
        <h4>{props.user.userInfo.pronouns}</h4>
        <h4>{props.user.userInfo.location}</h4>
      </div>
      <div classname="user_interests">
        <ul>{interests}</ul>
      </div>
    </div>
  );
}

export default UserCard;

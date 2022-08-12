import React from "react";
import UserInterest from "./UserInterest";
import "./card.css"

function UserCard(props) {
  console.log(props.user);
  const arr = Array.from(props.user.userInterests);
  const interests = arr.map((interest) => {
    return <UserInterest interests={interest.interest} key={interest.id} />;
  });
  return (
    <div>
    <div class="card">
      <img src="" className="card-img-top user_card" alt=""/>
      <div class="card-body">
        <h4 class="card-text">{props.user.userInfo.username}</h4>
        <h5>{props.user.userInfo.first_name} {props.user.userInfo.last_name}</h5>
        <h5></h5>
        <h5>{props.user.userInfo.pronouns}</h5>
        <h5>{props.user.userInfo.location}</h5>
        </div>
        <div className="interests">
          {interests}
        </div>
    </div>
    </div>
  );
}

export default UserCard;

import React from "react";
import UserInterest from "./UserInterest";
import "./card.css";

function Card(props) {
  console.log(props.user);
  return (
    // <div>
    //   <div className="user_profile">
    //     <h2>{props.user.userInfo.username}</h2>
    //     <h3>{props.user.userInfo.first_name}</h3>
    //     <h3>{props.user.userInfo.last_name}</h3>
    //     <h4>{props.user.userInfo.pronouns}</h4>
    //     <h4>{props.user.userInfo.location}</h4>
    //   </div>
    //   <div classname="user_interests">
    //   </div>
    // </div>
    <div>
      <div class="card user_card">
        <img src="" className="card-img-top " alt="" />
        <div class="card-body">
          <h4 class="card-text">{props.user.userInfo.username}</h4>
          <h5>
            {props.user.userInfo.first_name} {props.user.userInfo.last_name}
          </h5>
          <h5></h5>
          <h5>{props.user.userInfo.pronouns}</h5>
          <div className="d-flex justify-content-between">
            <h5>{props.user.userInfo.location}</h5>
            <button className="btn btn-success">Friend Request</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import UserInterest from "./UserInterest";
import "./card.css";

function Card(props) {
  const [userInterests, setUserInterests] = React.useState([]);

  const fetchInterests = async () => {
    try {
      const res = await fetch(
        `https://haven-nodejs.herokuapp.com/users/profile/${props.user.userInfo.id}/interests`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("token"),
          },
        }
      );
      const parseRes = await res.json();
      setUserInterests(parseRes);
      console.log(userInterests);
    } catch (error) {
      console.error(error);
    }
  };
React.useEffect(() => {
  fetchInterests();
}, [])
  const arr = Array.from(userInterests)
  console.log(arr)
  const interests = arr.map((interest) => {
    return <UserInterest interests={interest.interest} key={interest.id} />;
  });
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
          <div>{interests}</div>
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

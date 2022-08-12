import React from "react";

function UserInterest(props) {
  return (
    <div>
      <span className="badge bg-success">{props.interests}</span>
    </div>
  );
}

export default UserInterest;

import React from "react";

const Activity = (props) => {
    console.log(props)
  return (
    <div>
        <h1>{props.props.title}</h1>
        <h3>{props.props.content}</h3>
        <div className = "d-flex flex-column">
            <h4>{props.props.budget}</h4>
            <h4>{props.props.spots_open}</h4>
            <h4>{props.props.spots_total}</h4>
        </div>
    </div>
  );
};

export default Activity;

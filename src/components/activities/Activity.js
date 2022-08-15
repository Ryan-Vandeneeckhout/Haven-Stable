import React, { useEffect } from "react";

const Activity = (props) => {
  const [replies, setReplies] = React.useState([]);
  const getReplies = async () => {
    try {
      const res = await fetch("https://haven-nodejs.herokuapp.com/activities/:id/replies");
      const parseRes = await res.json();
      console.log(parseRes)
      // setReplies(parseRes);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getReplies()
  }, [])
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

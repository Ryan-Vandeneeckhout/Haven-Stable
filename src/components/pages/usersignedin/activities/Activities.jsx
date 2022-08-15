import { useState, useEffect } from "react";
import { AxiosGET } from "../../../axiosCalls/AxiosGET";

const Activities = () => {
  const [activityItem, setActivityItem] = useState([]);
  const [errorAPI, setErrorAPI] = useState("");

  console.log(activityItem);

  useEffect(() => {
    const copyOfActivityItem = activityItem;
    const orderedNewest = copyOfActivityItem.sort((a, b) => {
      let pa = a.id,
        pb = b.id;

      if (pa > pb) {
        return -1;
      }
      if (pa < pb) {
        return 1;
      }
      return 0;
    });
    setActivityItem([...orderedNewest]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderActvityItems = () => {
    if (activityItem === []) {
      return <p>Empty Acts</p>;
    } else {
      return (
        <ul className="activityList">
          {activityItem.map((post, index) => (
            <div className="activityItem" key={index}>
              <h3>{post.title}</h3>
              <h4>{post.location}</h4>
              <div className="userProfile">
                <div className="userinfo">
                  <p>{post.username}</p>
                  <p>{post.pronouns}</p>
                  <p>{post.avatar_url}</p>
                </div>
              </div>
              <li className="middle-row">
                <p>{post.content}</p>
                <p>{post.budget}</p>
              </li>

              <div className="bottom-row">
                <p>{`${post.spots_open}/${post.spots_total} participants`}</p>
                <button className="join-button">Join Activity!</button>
              </div>
            </div>
          ))}
        </ul>
      );
    }
  };

  return (
    <div className="activityListContainer">
      <AxiosGET
        APICallUrl={"https://haven-nodejs.herokuapp.com/activities"}
        setActivityItem={setActivityItem}
        setErrorAPI={setErrorAPI}
        errorAPI={errorAPI}
      />
      {renderActvityItems()}
    </div>
  );
};
export default Activities;
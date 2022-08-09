import "../sass/_landingPage.scss";
import { useState } from "react";
import { AxiosGET } from "../axiosCalls/AxiosGET";

const LandingPage = () => {
  const [activityItem, setActivityItem] = useState([]);
    const [errorAPI, setErrorAPI] = useState("");
  
    console.log(activityItem);
    
  return (
    <section className="landingPageSection">
      <div className="wrapper10">
        <h1>Landing Page</h1>
        <div className="activityListContainer">
          <AxiosGET APICallUrl={"https://haven-nodejs.herokuapp.com/activities"} setActivityItem={setActivityItem} setErrorAPI={setErrorAPI} errorAPI={errorAPI} />
          <ul className="activityList">
            {activityItem.map((post, index) => (
                <div className="activityItem" key={index}>
                <h3>{post.title}</h3>
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
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

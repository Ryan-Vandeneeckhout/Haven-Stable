import "../sass/_landingPage.scss";
import { useState, useEffect } from "react";
import { AxiosGET } from "../axiosCalls/AxiosGET";

const UserProfileLandingPage = () => {
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
                  <h1>{post.username}</h1>
            </div>
          ))}
        </ul>
      );
    }
  };

  return (
    <section className="landingPageSection">
      <div className="wrapper10">
        <div className="activityListContainer">
          <AxiosGET
            APICallUrl={"https://haven-nodejs.herokuapp.com/users"}
            setActivityItem={setActivityItem}
            setErrorAPI={setErrorAPI}
            errorAPI={errorAPI}
          />
          {renderActvityItems()}
        </div>
      </div>
    </section>
  );
};

export default UserProfileLandingPage;

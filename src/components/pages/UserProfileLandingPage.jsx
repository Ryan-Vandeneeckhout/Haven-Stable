import "../sass/_landingPage.scss";
import { useState, useEffect } from "react";
import { AxiosGET } from "../axiosCalls/AxiosGET";
import NavMenu from "../navigation/NavMenu";

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
        <ul className="profileList">
          {activityItem.map((post, index) => (
            <div className="profileItem" key={index}>
              <h1>{post.username}</h1>
            </div>
          ))}
        </ul>
      );
    }
  };

  return (
    <>
      <NavMenu />
      <section className="landingPageSection">
        <div className="wrapper10">
          <div className="profileListContainer">
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
    </>
  );
};

export default UserProfileLandingPage;

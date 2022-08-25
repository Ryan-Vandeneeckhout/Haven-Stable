import "../../sass/_landingPage.scss";
import { useState, useEffect } from "react";
import { AxiosGET } from "../../axiosCalls/AxiosGET";
import NavMenu from "../../navigation/NavMenu";
import ProfilePageLandingPage from "./ProfilePageLandingPage";
import { Link } from "react-router-dom";
import ProfileSettingsFirebase from "../../firebase/ProfileSettingsFirebase";

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
        <>
          <h2>Discover friends</h2>
          <ul className="profileList">
            {activityItem.map((post, index) => (
              <Link to={`/${post.id}`}>
                <ProfilePageLandingPage
                  username={post.username}
                  avatar={post.avatar_url}
                  Name={post.name}
                  pronouns={post.pronouns}
                  location={post.location}
                  id={post.id}
                  key={index}
                />
              </Link>
            ))}
          </ul>
        </>
      );
    }
  };

  return (
    <>
      <NavMenu />
      <section className="landingPageSection">
        <div className="wrapper5">
          <div className="profileListContainer">
            <ProfileSettingsFirebase/>
            {/* <AxiosGET
              APICallUrl={"https://haven-nodejs.herokuapp.com/users"}
              setActivityItem={setActivityItem}
              setErrorAPI={setErrorAPI}
              errorAPI={errorAPI}
            /> */}
            {/* {renderActvityItems()} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfileLandingPage;

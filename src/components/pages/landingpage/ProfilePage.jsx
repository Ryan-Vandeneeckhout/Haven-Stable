import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import "../../sass/_profilePage.scss";

import InputLinked from "../../inputs/InputLinked";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";

const ProfilePage = () => {
  const [profileArray, setProfileArray] = useState([]);
  const [interestArray, setInterestArray] = useState([]);
  const [activities, setActivitiesArray] = useState([]);
  const postid = useParams();

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://haven-nodejs.herokuapp.com/users/profile/${postid.postid}`,
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        setProfileArray(response.data.profile);
        setInterestArray(response.data.interests);
        setActivitiesArray(response.data.activities);
        console.log(response.data);
      })
      .catch(function (error) {
        if (error.response.data === "not authorized") {
        }
      });
  }, [postid.postid]);

  const renderProfilePage = () => {
    if (!profileArray) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          {profileArray.map((item, index) => {
            return (
              <div className="profilePage" key={index}>
                {item.avatar_url ? (
                  <div className="imageProfile">
                    <img src="./assets/profileAvatars/profileDefault.png" />
                  </div>
                ) : (
                  <img src={item.avatar_url} />
                )}
                {item.avatar_url === null && (
                  <div className="imageProfile">
                    <img src="./assets/profileAvatars/profileDefault.png" />
                  </div>
                )}
                <h2>{item.username}</h2>
                <h3>{item.location}</h3>
                <h3>{item.pronouns}</h3>
                <h3>{item.bio}</h3>
                <button>Add as Friend</button>
                <button>Message +</button>
              </div>
            );
          })}
        </>
      );
    }
  };

  const renderInterestData = () => {
    if (!interestArray) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          {interestArray.map((item, index) => {
            return (
              <div className="profilePage" key={index}>
                <p>{item.interest}</p>
              </div>
            );
          })}
        </>
      );
    }
  };

  const renderActivitiesData = () => {
    if (!activities) {
      return <p>Loading</p>;
    } else {
      return (
        <>
          <h3>Activities</h3>
          {activities.map((item, index) => {
            return (
              <div className="profilePage" key={index}>
                <p>{item.title}</p>
              </div>
            );
          })}
        </>
      );
    }
  };

  return (
    <section className="otherUserProfilePage">
      <OnBoardingUpperContentWrapper>
        <InputLinked
          ButtonText={"Back"}
          ButtonClass={"backButton"}
          ButtonClassContainer={"upperButtonContainer"}
          Linked={"/"}
        />
      </OnBoardingUpperContentWrapper>
      <section>
        <div className="wrapper5">
          <ul className="profileData">{renderProfilePage()}</ul>
          <ul className="interestData">{renderInterestData()}</ul>
          <ul className="activitiesData">{renderActivitiesData()}</ul>
        </div>
      </section>
    </section>
  );
};

export default ProfilePage;

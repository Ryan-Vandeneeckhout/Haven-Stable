import React from "react";
import UserCard from "../userProfile/UserCard";
import Activity from "../activities/Activity";
function MyProfile() {
  const [userInfo, setMyInfo] = React.useState({});
  const [userInterests, setUserInterests] = React.useState({});
  const [userActivities, setUserActivities] = React.useState({});
  const [inputs, setInputs] = React.useState({
    title: "",
    content: "",
    budget: "",
    spots_open: "",
    spots_total: "",
  });
  
  const arr = Array.from(userActivities)
  const activities = arr.map((activity)=> {
    return <Activity props= {activity}/>
  })

  const onChange = (e) => {
    switch (e.target.placeholder) {
      case "Activity Title":
        setInputs({ ...inputs, title: e.target.value });
        break;
      case "Description":
        setInputs({ ...inputs, content: e.target.value });
        break;
      case "Budget":
        setInputs({ ...inputs, budget: e.target.value });
        break;
      case "Spots Open":
        setInputs({ ...inputs, spots_open: e.target.value });
        break;
      case "Spots Total":
        setInputs({ ...inputs, spots_total: e.target.value });
        break;
    }
  };

  const postActivity = async () => {
    try {
      const body = JSON.stringify(inputs);
      const res = await fetch("https://haven-nodejs.herokuapp.com/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
        body: body,
      });
    } catch (error) {}
  };
  const getUserInfo = async () => {
    try {
      const res = await fetch("https://haven-nodejs.herokuapp.com/users/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.token,
        },
      });
      const parseRes = await res.json();
      setMyInfo(parseRes.myUser[0]);
      setUserInterests(parseRes.myInterests);
      setUserActivities(parseRes.myActivities);
      console.log(userActivities);
    } catch (error) {
      console.error(error);
    }
  };
  React.useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div>
      <div>
        <UserCard user={{ userInfo, userInterests, userActivities }} />
      </div>
      <div className="d-flex flex-column postActivityForm w-25">
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Activity Title"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Description"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Budget"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Spots Open"
        ></input>
        <input
          onChange={(e) => onChange(e)}
          type="text"
          placeholder="Spots Total"
        ></input>
        <button onClick={postActivity} className="btn btn-success">
          Post Activity!
        </button>
      </div>
      <div>{activities}</div>
    </div>
  );
}

export default MyProfile;

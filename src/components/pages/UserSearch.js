import React, { useDeferredValue } from "react";
import Card from "../userProfile/Card"

const UserSearch = () => {
  const [users, setUsers] = React.useState([]);
  const fetchUsers = async () => {
    try {
      const res = await fetch("https://haven-nodejs.herokuapp.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("token"),
        },
      });
      const parseRes = await res.json();
      setUsers(parseRes);
    } catch (error) {
      console.error(error);
    }
  };

  const userList = users.map((user) => {

    const userInfo = {
      username :user.username,
      first_name: user.first_name,
      last_name: user.last_name,
      pronouns: user.pronouns,
      location: user.location
    }
    return (
      <Card
      user = {{userInfo}}
      />
    );
  });

  React.useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
      {userList}
    </ul>
    </div>
  );
};

export default UserSearch;

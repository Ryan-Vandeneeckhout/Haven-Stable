const ProfilePageLandingPage = (props) => {
  const renderAvatar = () => {
    if (props.avatar === "" || !props.avatar) {
      return (
        <div className="imageProfile">
          <img src="./assets/profileAvatars/profileDefault.png" />
        </div>
      );
    } else {
      return (
        <div className="imageProfile">
          <img src={props.avatar} alt="user profile" />
        </div>
      );
    }
  };

  return (
    <div className="profileItem">
      <div className="upperProfileCard">
        {renderAvatar()}
        <div className="upperProfileCardUserInfomation">
          <h3>{props.username}</h3>
          <h4>{props.pronouns}</h4>
          <h4>
            {`${props.location}`
              .replace(`value`, " ")
              .replaceAll(`"`, " ")
              .replace(`{`, " ")
              .replace(`}`, " ")
              .replace(`label`, " ")
              .replaceAll(`:`, " ")
              .replaceAll(",", ", ")}
          </h4>
          <h4>{props.id}</h4>
        </div>
      </div>
      <div className="bottomProfileCard">
        <p>My favourite ice cream topping is sprinkles and it is true.</p>
      </div>
    </div>
  );
};

export default ProfilePageLandingPage;

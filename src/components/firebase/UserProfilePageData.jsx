import "../sass/_profileCard.scss";

const UserProfilePageData = (props) => {
  const renderAvatar = () => {
    if (
      props.avatar === " " ||
      props.avatar === null ||
      props.avatar === undefined
    ) {
      return <img src="./assets/profileAvatars/profileDefault.png" />;
    } else {
      return <img src={props.avatar} alt="User Avatar" />;
    }
  };

  const renderPronouns = () => {
    return (
      <p>
        {props.pronouns.map((item, index) => {
          return <span key={index}>{item.pronoun} </span>;
        })}
      </p>
    );
  };

  const renderMoment = () => {
    return (
      <>
        {props.moments.map((item, index) => {
          return (
            <>
              <h4 key={index}>{item.question}</h4>
              <p>{item.answer}</p>
            </>
          );
        })}
      </>
    );
  };

  const renderInterestTags = () => {
    return (
      <>
        {props.interests.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </>
    );
  };

  const renderLocation = () => {
    return (
      <>
        <p>{props.location.label}</p>
      </>
    );
  };

  return (
    <>
      <div className="profilePageUpper">
        {renderAvatar()}
        {renderLocation()}
        {renderPronouns()}
      </div>

      <div className="profilePageMiddle">
        <h3>Interests</h3>
        {renderInterestTags()}
      </div>

      <div className="profilePageBottom">
        <h3>Past Moments</h3>
        {renderMoment()}
      </div>
    </>
  );
};

export default UserProfilePageData;

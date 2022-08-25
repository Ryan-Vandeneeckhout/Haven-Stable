import { Link } from "react-router-dom";
import "../sass/_profileCard.scss";

const ProfileCardLandingPage = (props) => {
  const renderAvatar = () => {
    return <img src={props.avatar} alt="User Avatar" />;
  };
  const renderPronouns = () => {
    return (
      <p>
        {props.pronouns.map((item, index) => {
          return (
            <span className="pronounItem" key={index}>
              {item.pronoun}{" "}
            </span>
          );
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
              <h4 className="pronounItem" key={index}>
                {item.question}
              </h4>
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
          return (
            <p className="interestTag" key={index}>
              {item}
            </p>
          );
        })}
      </>
    );
  };

  const renderLocation = () => {
    return (
      <>
        <p className="interestTag">{props.location.label}</p>
      </>
    );
  };
  return (
    <Link to={`${props.uid}`}>
    <div className="profileCard">
      <div className="profileCardUpper">
        <div className="avatarContainer">{renderAvatar()}</div>
        <div className="userData">
          <h3>{props.username}</h3>

          <div className="userdataPronounsLocation">
            {renderPronouns()}
            {renderLocation()}
          </div>
        </div>
      </div>

      <div className="profileCardMiddle">
        <div className="momentRecent">{renderMoment()}</div>
        <div className="interestTags">{renderInterestTags()}</div>
      </div>
      <div className="profileCardBottom">
        <p>{`${props.dateMoment}`}</p>
        <p>Message</p>
      </div>
      </div>
      </Link>
  );
};
export default ProfileCardLandingPage;

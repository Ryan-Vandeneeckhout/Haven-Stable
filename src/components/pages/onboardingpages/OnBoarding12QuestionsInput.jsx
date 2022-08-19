import { useState } from "react";

const OnBoarding12QuestionsInput = (props) => {
  const [userInputMessage, setUserInputMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <>
      {" "}
      {success ? (
        <div className="submittedQuestion">
          <p>Submitted------------------------------------------</p>
        </div>
      ) : (
        <form className="questionForm" onSubmit={handleSubmit}>
          <h2>{props.question}</h2>
          <textarea rows="5"
            name="Details"
            onChange={(event) => {
              setUserInputMessage(event.target.value);
            }}
            value={userInputMessage}
            className="message"
            placeholder="Details"
          ></textarea>
          <button type="submit" className="submit" value={props.contentID}>Submit</button>
        </form>
      )}
    </>
  );
};
export default OnBoarding12QuestionsInput;

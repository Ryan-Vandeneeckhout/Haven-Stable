import { useState } from "react";

const OnBoarding12QuestionsInput = () => {
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
          <p>Submitted</p>
        </div>
      ) : (
        <form className="questionForm" onSubmit={handleSubmit}>
          <h2>I am looking for friends that are...</h2>
          <textarea
            name="Details"
            onChange={(event) => {
              setUserInputMessage(event.target.value);
            }}
            value={userInputMessage}
            className="message"
            placeholder="Details"
          ></textarea>
          <input type="submit" className="submit" value="Submit" />
        </form>
      )}
    </>
  );
};
export default OnBoarding12QuestionsInput;

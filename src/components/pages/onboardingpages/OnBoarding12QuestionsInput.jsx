import { useState } from "react";

const OnBoarding12QuestionsInput = (props) => {
  const [success, setSuccess] = useState(false);

  const handleState = (e) => {
    e.preventDefault();
    setSuccess(true);
    props.pushData();
  };

  return (
    <>
      {" "}
      {success ? (
        <div className="submittedQuestion">
          <p>Submitted------------------------------------------</p>
        </div>
      ) : (
        <form className="questionForm" onSubmit={handleState}>
          <h2>{props.question}</h2>
          <textarea
            rows="5"
            name="Details"
            onChange={(event) => {
              props.setUserInputMessage(event.target.value);
              props.setQuestion(props.question);
            }}
            className="message"
            placeholder="Details"
          ></textarea>
          <button type="submit" className="submit" value={props.contentID}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};
export default OnBoarding12QuestionsInput;

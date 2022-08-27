import { useState } from "react";

const OnBoarding12QuestionsInput = (props) => {
  const [success, setSuccess] = useState(false);
  const [selectedBox, setSelectedBox] = useState(true);

  const handleState = (e) => {
    e.preventDefault();
    setSuccess(true);
    props.pushData();
  };

  const renderQuestion = () => {
    setSelectedBox(false);
    renderSelectBox();
  };

  const renderSelectBox = () => {
    if (selectedBox === true) {
      return <div className="cardSelectedBox" onClick={renderQuestion}><p>Select a card and write your answer</p><button>+</button></div>;
    } else {
      return (
        <>
          {success ? (
            <div className="submittedQuestion">
              <p>Submitted------------------------------------------</p>
            </div>
          ) : (
              <form className="questionForm" onSubmit={handleState}>
                <div className="imageContainer">
                  <img src="" alt="imageQuestion"/>
                </div>
              <h2>{props.question}</h2>
              <textarea
                rows="5"
                name="Details"
                onChange={(event) => {
                  props.setUserInputMessage(event.target.value);
                  props.setQuestion(props.question);
                }}
                className="message"
                placeholder="tap to start typing"
              ></textarea>
              <button type="submit" className="submit" value={props.contentID}>
                Submit
              </button>
            </form>
          )}
        </>
      );
    }
  };

  return <>{renderSelectBox()}</>;
};
export default OnBoarding12QuestionsInput;

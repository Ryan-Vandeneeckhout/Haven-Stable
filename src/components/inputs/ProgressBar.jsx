import "../sass/_progressBar.scss";

const ProgressBar = (props) => {
  return (
    <div className="progressBarContainer">
      <div className="Bar">
      {Array.from({ length: `${props.setgreen}` }, (_, index) => (
          <div key={index} className="dot green" />
        ))}
        {Array.from({ length: `${props.grey}` }, (_, index) => (
          <div key={index} className="dot grey" />
        ))}
        {Array.from({ length: `${props.green}` }, (_, index) => (
          <div key={index} className="dot green" />
        ))}
      </div>
    </div>
  );
};
export default ProgressBar;

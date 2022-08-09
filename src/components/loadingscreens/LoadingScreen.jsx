import React from "react";
import "../sass/_loadingScreen.scss";

const LoadingScreen = (props) => {
  return (
    <section className="LoadingScreenSection">
      <div className="wrapper10">
        <div className="LoadingScreenCircle">
          <div className="loadingScreenTitleContainer">
            <h1>H</h1>
            {/*Have Jing create a custom svg with a stylized H as a logo*/}
            {props.loadingScreenMenu && <h2>Click to Login</h2>}
          </div>
        </div>

        <h3 className={`loadingScreenH3${props.error ? " errorConectionDatabase" : null}`}>
          {props.error
            ? "Error could not connect to the Haven database"
            : props.textAPIConnection}
          <span className="loading" />
        </h3>
        {props.error ? (
          <button onClick={props.isAuth}>Click to Retry</button>
        ) : null}
      </div>
    </section>
  );
};
export default LoadingScreen;

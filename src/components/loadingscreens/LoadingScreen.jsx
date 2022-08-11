import React from "react";
import "../sass/_loadingScreen.scss";

const LoadingScreen = (props) => {
  return (
    <section className="LoadingScreenSection">
      <div className="wrapper10">
      <div className="truck">
            <img src="./assets/svg/loading.svg" alt="a truck zooming by on the haven user creation page."/>
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

import { useEffect, useState } from "react";

const OnBoardingCreateUser = (props) => {
  
  const [text, setText] = useState(""); 
  
  useEffect(() => {
    LoadingScreenLoaded();
  }, []);

  const LoadingScreenLoaded = () => {
    setTimeout(function () {
      setText("Success");
      
    }, 1000);
    setTimeout(function () {
      props.isAuth();
      
    }, 1000);
  };

  return (
    <>
      <div className="createUserLoadingScreen">
        <div className="square">
          <div className="truck">
            <img src="./assets/svg/loading.svg" alt="a truck zooming by on the haven user creation page."/>
          </div>
          <div className="circleRotating">
          <img src="./assets/svg/loadingcircle.svg" alt="loading circle for the creation of user profile"/>
          </div>
          <div className="titleContainerLoadingScreen">
            <h2 className="loading">{text}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default OnBoardingCreateUser;
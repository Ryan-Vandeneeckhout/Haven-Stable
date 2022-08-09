const OnBoardingCreateUser = (props) => {
  let body = props.sendUserData;

  let broswerErrorCheck = "";
  props.passData();

  const callFunction = () => {
    LoadingScreenLoaded();
    console.log(body);
  };

  const LoadingScreenLoaded = async () => {
    try {
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      broswerErrorCheck = await response.json();
      localStorage.setItem("token", broswerErrorCheck.token);
      console.log(broswerErrorCheck);
    } catch (error) {
      props.setText("User Creation Failed");
    }

    if (broswerErrorCheck === "Missing Credentials") {
      props.setText("Haven Token Empty, User Not Authorized by Database");
    } else {
      props.setText("User Created, Welcome to Haven");

      setTimeout(function () {
        props.setText("Engraving the details to the stone tablet");
        
      }, 4000);
      setTimeout(function () {
        props.isAuth();
        
      }, 4000);

    }
  };

  return (
    <>
      <div className="createUserLoadingScreen">
        <div className="square">
          <div className="circleRotating">
            <div className="arrows">
              <div className="arrow"></div>
            </div>
          </div>
          <div className="titleContainerLoadingScreen">
            <h2 className="loading">{props.text}</h2>
            {callFunction()}
          </div>
        </div>
      </div>
    </>
  );
};
export default OnBoardingCreateUser;

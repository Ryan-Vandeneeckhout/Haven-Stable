import "../sass/_loginSignPage.scss";
import InputLinked from "../inputs/InputLinked.jsx";

const LoginAndSignUpLandingPage = () => {
  return (
    <section className="LoginAndSignUpPageSection">
      <div className="wrapper10">
        <div className="contentContainer">
          <h1>Welcome to <span className="h1TitleEmphasis">haven</span></h1>
          <p>Haven is a safe network for members of LGBTQ+ to find friends.</p>
        </div>
        <div className="havenImageContainer">
          <div className="havenImage"/>
        </div>
        <div className="loginContainers">
        <InputLinked
            ButtonText={"Sign Up"}
            ButtonClass={"signInButton"}
            ButtonClassContainer={"signInLandingPageButton"}
            Linked={"/signup"}
            Show={"hidden"}
          />
          <InputLinked
            ButtonText={"Log In"}
            Linked={"/login"}
            ButtonClass={"logInButton"}
            ButtonClassContainer={"logInLandingPageButton"}
            Show={"hidden"}
          />
        </div>
      </div>
    </section>
  );
};
export default LoginAndSignUpLandingPage;

import "../sass/_loginSignPage.scss";
import InputLinked from "../inputs/InputLinked.jsx";

const LoginAndSignUpLandingPage = () => {
  return (
    <section className="LoginAndSignUpPageSection">
      <div className="wrapper10">
        <div className="contentContainer">
          <h1>Welcome to Haven</h1>
          <p>Haven is a safe network for members of LGBTQ+ to find friends.</p>
        </div>
        <div className="loginContainers">
          <InputLinked
            ButtonText={"Log In"}
            Linked={"/login"}
            ButtonClass={"logInButton"}
            ButtonClassContainer={"logInLandingPageButton"}
          />
          <InputLinked
            ButtonText={"Sign Up"}
            ButtonClass={"signInButton"}
            ButtonClassContainer={"signInLandingPageButton"}
            Linked={"/signup"}
          />
        </div>
        <div className="logInbottom">
          <p>A Community created in the Spirit of Friendship</p>
        </div>
      </div>
    </section>
  );
};
export default LoginAndSignUpLandingPage;

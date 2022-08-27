import "../sass/_loginSignPage.scss";
import InputLinked from "../inputs/InputLinked.jsx";

const LoginAndSignUpLandingPage = () => {
  return (
    <section className="LoginAndSignUpPageSection">
      <div className="upperLogo">
        <h2 className="Logo">haven</h2>
      </div>
      <div className="wrapper5">
        <div className="contentContainer">
          <h1><span className="h1TitleEmphasis">haven</span></h1>
          <p>helping members of the LGBTQ+ community to find friends.</p>
        </div>
        <div className="loginContainers">
        <InputLinked
            ButtonText={"sign Up"}
            ButtonClass={"signInButton"}
            ButtonClassContainer={"signInLandingPageButton"}
            Linked={"/signup"}
            Show={"hidden"}
          />
          <InputLinked
            ButtonText={"log In"}
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

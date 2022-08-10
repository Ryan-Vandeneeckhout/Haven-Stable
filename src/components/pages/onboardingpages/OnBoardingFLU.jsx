import OnBoardingContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingContentWrapper";
import OnBoardingContentWrapperBottom from "../../wrappers/onboardingWrappers/OnBoardingContentWrapperBottom";
import OnBoardingSectionWrapper from "../../wrappers/onboardingWrappers/OnBoardingSectionWrapper";
import OnBoardingUpperContentWrapper from "../../wrappers/onboardingWrappers/OnBoardingUpperContentWrapper";
import OnBoardingSectionContainer from "../../wrappers/onboardingWrappers/OnBoardingSectionContainer";

import InputLinked from "../../inputs/InputLinked";
import EmailAndPasswordInput from "../../inputs/EmailAndPassInput";
import ProgressBar from "../../inputs/ProgressBar";
import { useRef } from "react";

const OnBoardingFLU = (props) => {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const usernameRef = useRef(null);

  return (
    <OnBoardingSectionContainer>
      <OnBoardingSectionWrapper>
        <OnBoardingUpperContentWrapper>
          <InputLinked
            ButtonText={"Back"}
            ButtonClass={"backButton"}
            ButtonClassContainer={"upperButtonContainer"}
            Linked={"/interests"}
          />
          {props.username ? (
            <InputLinked
              ButtonText={"Next"}
              ButtonClass={"nextButton"}
              ButtonClassContainer={"upperButtonContainer"}
              Linked={"/avatars"}
            />
          ) : (
            <div className="buttonContainer upperButtonContainer">
              <div className="backButton grey">Next</div>
            </div>
          )}
        </OnBoardingUpperContentWrapper>
        <ProgressBar green={2} grey={4} />
        <h2>Profile Settings - FLU</h2>
        <OnBoardingContentWrapper>
          <form>
            <EmailAndPasswordInput
              valueInput={"Username"}
              valueText={"Username"}
              setValue={props.setUserName}
              value={props.username}
              InputRef={usernameRef}
            />
            <EmailAndPasswordInput
              valueInput={"First Name"}
              valueText={"First Name"}
              setValue={props.setFirstName}
              value={props.firstName}
              InputRef={firstNameRef}
            />

            <EmailAndPasswordInput
              valueInput={"Last Name"}
              valueText={"Last Name"}
              setValue={props.setLastName}
              value={props.lastname}
              InputRef={lastNameRef}
            />
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p>The creation of a username is required.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingFLU;

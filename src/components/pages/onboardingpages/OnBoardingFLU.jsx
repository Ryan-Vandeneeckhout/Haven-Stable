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
            Linked={"/signup"}
          />
          {props.username ? (
            <InputLinked
              ButtonText={"Next"}
              ButtonClass={"nextButton"}
              ButtonClassContainer={"upperButtonContainer"}
              Linked={"/location"}
            />
          ) : (
            <div className="buttonContainer upperButtonContainer">
              <div className="nextButton grey">Next</div>
            </div>
          )}
        </OnBoardingUpperContentWrapper>
        <ProgressBar setgreen={0} green={7} grey={1} />
        <h2>Profile Settings</h2>
        <OnBoardingContentWrapper>
          <form className="textForm">
            <EmailAndPasswordInput
              valueInput={"Username required..."}
              valueText={"Username Required"}
              setValue={props.setUserName}
              value={props.username}
              InputRef={usernameRef}
            />
            <EmailAndPasswordInput
              valueInput={"First Name (Optional)..."}
              valueText={"First Name"}
              setValue={props.setFirstName}
              value={props.firstName}
              InputRef={firstNameRef}
            />

            <EmailAndPasswordInput
              valueInput={"Last Name (Optional)..."}
              valueText={"Last Name"}
              setValue={props.setLastName}
              value={props.lastname}
              InputRef={lastNameRef}
            />
          </form>
        </OnBoardingContentWrapper>
        <OnBoardingContentWrapperBottom>
          <p className="paraAccount">The creation of a username is required.</p>
        </OnBoardingContentWrapperBottom>
      </OnBoardingSectionWrapper>
    </OnBoardingSectionContainer>
  );
};
export default OnBoardingFLU;

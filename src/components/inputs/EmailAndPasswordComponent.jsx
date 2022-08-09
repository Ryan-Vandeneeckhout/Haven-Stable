import EmailAndPasswordInput from "./EmailAndPassInput";

const EmailAndPasswordComponent = (props) => {
  const EmailText = "Email";
  const PassText = "Password";

  return (
    <>
      <EmailAndPasswordInput
        valueInput={EmailText}
        valueText={EmailText}
        valueType={EmailText}
        setValue={props.setEmail}
        value={props.email}
        InputRef={props.EmailRef}
      />
      <EmailAndPasswordInput
        valueInput={PassText}
        valueText={PassText}
        valueType={PassText}
        setValue={props.setPassword}
        value={props.password}
        InputRef={props.InputRef}
      />
    </>
  );
};
export default EmailAndPasswordComponent;

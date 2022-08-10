const DevMenuButton = (props) => {
  const DevMenuOpen = () => {
    props.setDevMenuOpen((value) => !value);
  };
  return (
    <div className="DevMenuButtonContainer">
      <button onClick={DevMenuOpen}>
        {props.DevMenuOpen ? "Close" : "Open"} Dev Menu
      </button>
      <button
        className={`userSwitchAuthButton${props.user ? " Green" : " Red"}`}
        onClick={props.UserAuth}
      >
        {props.user ? "User True" : "User False"}{" "}
      </button>
    </div>
  );
};
export default DevMenuButton;

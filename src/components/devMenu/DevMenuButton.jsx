import { useLogout } from "../firebase/useLogout";

const DevMenuButton = (props) => {
/*   const DevMenuOpen = () => {
    props.setDevMenuOpen((value) => !value);
  }; */
  const { logout } = useLogout();

  const UserState = () => {

    if (props.user) {
      
      logout(); 
      props.UserAuth(); 
    }

    else {
      props.UserAuth(); 

    }
  }



  return (
    <div className="DevMenuButtonContainer">
     {/*  <button className="openCloseButton" onClick={DevMenuOpen}>
        {props.DevMenuOpen ? "Close" : "Open"} Dev Menu
      </button> */}
      <button
        className={`userSwitchAuthButton${props.user ? " Green" : " Red"}`}
        onClick={UserState}
      >
        {props.user ? "User True" : "User False"}{" "}
      </button>
    </div>
  );
};
export default DevMenuButton;

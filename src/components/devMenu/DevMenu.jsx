import "../sass/_devMenu.scss";
import ThemeMenuChanger from "./ThemeMenuChanger.jsx";

const DevMenu = (props) => {

  const CloseDevMenu = () => {
    props.setDevMenuOpen((value) => !value);
  };

  return (
    <>
      <div className={`devMenu${props.DevMenuOpen ? " shown" : " hidden"}`}>
        <ul>
          <button
            className={`userSwitchAuthButton${props.user ? " Green" : " Red"}`}
            onClick={props.UserAuth}
          >
            {props.user ? "User True" : "User False"}{" "}
          </button>
          <ThemeMenuChanger />
          <button className={"devMenuToggle"} onClick={CloseDevMenu}>
            Close Menu
          </button>
        </ul>
      </div>
    </>
  );
};
export default DevMenu;

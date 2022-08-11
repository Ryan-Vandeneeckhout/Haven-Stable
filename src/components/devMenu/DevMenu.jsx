import "../sass/_devMenu.scss";
import ThemeMenuChanger from "./ThemeMenuChanger.jsx";

const DevMenu = (props) => {


  const CloseDevMenu = () => {
    localStorage.removeItem("token");
    props.setDevMenuOpen((value) => !value);
  };
  return (
    <>
      <div className={`devMenu${props.DevMenuOpen ? " shown" : " hidden"}`}>
        <ul>
          <ThemeMenuChanger />
        </ul>
      </div>
    </>
  );
};
export default DevMenu;

import "../sass/_devMenu.scss";
import ThemeMenuChanger from "./ThemeMenuChanger.jsx";

const DevMenu = (props) => {

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

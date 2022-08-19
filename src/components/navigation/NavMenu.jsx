import { Link } from "react-router-dom";
import "../sass/_nav.scss";

const NavMenu = () => {
  return (
    <nav className="navMenuProfilePage">
      <ul>
        <li>
          <Link className="havenTitleNav" to="/">haven</Link>
        </li>
        <div className="userSettings">

          <li className="profilePicture">
            <Link to="/myprofile"><img src="./assets/profileAvatars/profileDefault.png" /></Link>
          </li>
          <li >
          <img src="./assets/svg/slider.svg" />
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default NavMenu;

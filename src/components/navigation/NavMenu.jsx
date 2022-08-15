import { Link } from "react-router-dom";
import "../sass/_nav.scss"; 

const NavMenu = () => {
  return (
      <nav className="navMenuProfilePage">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Haven</li>
          <li>
            <Link to="/myprofile">Profile</Link>
          </li>
        </ul>
      </nav>
  );
};
export default NavMenu;

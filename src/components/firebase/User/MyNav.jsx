import { Link, useLocation } from "react-router-dom";
import "../../sass/_mynav.scss";

const MyNav = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <nav className="myNav">
      <ul>
        <li className={splitLocation[1] === "myprofile" ? "active" : "not"}>
          <Link to="/myprofile">account</Link>
        </li>
        <li className={splitLocation[2] === "myfriends" ? "active" : "not"}>
          <Link to="/account/myfriends">friends</Link>
        </li>
        <li className={splitLocation[2] === "mymoments" ? "active" : "not"}>
          <Link to="/account/mymoments">moments</Link>
        </li>
        <li className={splitLocation[2] === "myevents" ? "active" : "not"}>
          <Link to="/account/myevents">events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MyNav;

import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <section>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Haven</li>
          <li>
            <Link to="/myprofile">Profile</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default NavMenu;

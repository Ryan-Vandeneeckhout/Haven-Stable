import { Link, useLocation } from "react-router-dom";

const MyNavItem = (props) => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <li
      className={
        splitLocation[`${props.numberSpilt}`] === `${props.areaText}`
          ? "active"
          : "not"
      }
    >
      <Link to={props.linkTo}>{props.linkText}</Link>
    </li>
  );
};

export default MyNavItem;

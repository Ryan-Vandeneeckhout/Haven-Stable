import "../../../sass/_mynav.scss";
import MyNavItem from "./MyNavItem";

const MyNav = () => {

  return (
    <nav className="myNav">
      <ul>
        <MyNavItem linkTo="/myprofile" numberSpilt={1} areaText="myprofile" linkText="account" />
        <MyNavItem linkTo="/account/myfriends" numberSpilt={2} areaText="myfriends" linkText="friends"/>
        <MyNavItem linkTo="/account/mymoments" numberSpilt={2} areaText="mymoments" linkText="moments" />
        <MyNavItem linkTo="/account/myevents" numberSpilt={2} areaText="myevents" linkText="events" />
      </ul>
    </nav>
  );
};

export default MyNav;

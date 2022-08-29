import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import UserSignedOutInRouting from "./components/havenRoutingComponents/UserSignedOutRouting.jsx";
import UserSignInRouting from "./components/havenRoutingComponents/UserSignInRouting.jsx";
import DevMenu from "./components/devMenu/DevMenu";
import DevMenuButton from "./components/devMenu/DevMenuButton";
import "./components/sass/_app.scss";
import "./components/sass/_setup.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faTimes,
  faAngleUp,
  faPlay,
  faHandshakeAlt,
  faMobileAlt,
  faUniversalAccess,
  faPause,
  faAngleDown,
  faMusic,
  faEye,
  faStar,
  faAngleRight,
  faAngleLeft,
  faArrowRight,
  faDownload,
  faBuildingColumns,
  faArrowRightFromBracket,
  faDatabase,
  faBug,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(
  fab,
  faBars,
  faAngleUp,
  faArrowRight,
  faHandshakeAlt,
  faMobileAlt,
  faUniversalAccess,
  faPause,
  faPlay,
  faTimes,
  faDownload,
  faEye,
  faAngleDown,
  faMusic,
  faBuildingColumns,
  faArrowRightFromBracket,
  faAngleRight,
  faAngleLeft,
  faDatabase,
  faStar,
  faBug
);

function App() {
  const [user, setUser] = useState(null);
  const [DevMenuOpen, setDevMenuOpen] = useState(false);

  let htmlElement = document.documentElement;
  htmlElement.setAttribute("data-theme", localStorage.theme);
  const UserAuth = () => {
    setUser((value) => !value);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <>
          {user ? (
            <UserSignInRouting UserAuth={UserAuth} user={user} />
          ) : (
            <UserSignedOutInRouting UserAuth={UserAuth} user={user} />
          )}
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;

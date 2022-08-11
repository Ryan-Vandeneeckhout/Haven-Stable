import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import DevMenu from "./components/devMenu/DevMenu";
import DevMenuButton from "./components/devMenu/DevMenuButton";
import UserSignedOutInRouting from "./components/havenRoutingComponents/UserSignedOutRouting.jsx";
import UserSignInRouting from "./components/havenRoutingComponents/UserSignInRouting.jsx";
import LoadingScreen from "./components/loadingscreens/LoadingScreen.jsx";
import "./components/sass/_app.scss";
import "./components/sass/_setup.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faAngleUp, faPlay, faHandshakeAlt, faMobileAlt, faUniversalAccess, faPause, faAngleDown, faMusic, faEye, faStar, faDownload, faBuildingColumns, faArrowRightFromBracket, faDatabase, faBug} from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add( fab, faBars, faAngleUp, faHandshakeAlt, faMobileAlt, faUniversalAccess, faPause, faPlay, faTimes, faDownload, faEye, faAngleDown, faMusic, faBuildingColumns, faArrowRightFromBracket, faDatabase, faStar, faBug);


function App() {
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [textAPIConnection, setTextAPIConnection] = useState("Connecting");
  const [DevMenuOpen, setDevMenuOpen] = useState(false);

  let htmlElement = document.documentElement;
  htmlElement.setAttribute("data-theme", localStorage.theme);
  const UserAuth = () => {
    setUser((value) => !value);
  };

  const isAuth = async () => {
    try {
      const response = await fetch(
        "https://haven-nodejs.herokuapp.com/auth/is-verified",
        {
          method: "GET",
          headers: { token: localStorage.token },
        }
      );

      const parseRes = await response.json();
      parseRes === true ? setUser(true) : setUser(false);

      setTimeout(function () {
        setTextAPIConnection("Connected to Haven Database");
      }, 2000);

      setTimeout(function () {
        setTextAPIConnection("Welcome to Haven");
      }, 2000);

      setTimeout(function () {
        setLoadingScreen(false);
      }, 1000);
    } catch (error) {
      setTextAPIConnection("Connection Failed, Please Try Again");
      setError(true);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loadingScreen ? (
          <LoadingScreen
            textAPIConnection={textAPIConnection}
            error={error}
            isAuth={isAuth}
          />
        ) : (
          <>
            {user ? (
              <UserSignInRouting UserAuth={UserAuth} user={user} />
            ) : (
              <UserSignedOutInRouting
                UserAuth={UserAuth}
                isAuth={isAuth}
                user={user}
              />
            )}
          </>
        )}
        <DevMenuButton
          DevMenuOpen={DevMenuOpen}
          UserAuth={UserAuth}
          user={user}
          setDevMenuOpen={setDevMenuOpen}
        />
        <DevMenu DevMenuOpen={DevMenuOpen} />
      </BrowserRouter>
    </div>
  );
}

export default App;

import MyProfileContentWrapper from "../../wrappers/MyProfileWrappers/MyProfileContentWrapper";
import MyProfileItemWrapper from "../../wrappers/MyProfileWrappers/MyProfileItemWrapper";
import { useAuthContext } from "../useAuthContext";
import { useCollection } from "../useFirestoreDatabase";
import { useLogout } from "../useLogout";
import MyLogo from "./MyLogo";
import MyNav from "./MyNav/MyNav";

const MyProfilePage = (props) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const { databaseFirestore } = useCollection("HavenProfileSettings", [
    "uid",
    "==",
    user.uid,
  ]);

  const LogoutButton = () => {
    logout();
    props.userAuth();
    
  }

  return (
    <div>
      <MyLogo />
      <MyNav />
      <MyProfileContentWrapper>
        {databaseFirestore ? (
          <>
            {databaseFirestore.map((post) => (
              <div className="userInfomationFirebase">
                <MyProfileItemWrapper title={"avatar"}>
                  <div className="imageContainer">
                    <img src={post.avatar} alt="user avatar" />
                  </div>
                </MyProfileItemWrapper>
                <MyProfileItemWrapper title={"username"}>
                  <p>{post.username}</p>
                </MyProfileItemWrapper>
                <MyProfileItemWrapper title={"interests"}>
                  <ul className="interestTags">
                    {post.interests.map((item, index) => {
                      return (

                        <p className="interestTag" key={index}>{item}</p>

                      );
                    })}
                  </ul>
                </MyProfileItemWrapper>
              </div>
            ))}
          </>
        ) : null}
        <button onClick={LogoutButton}> Logout</button>
      </MyProfileContentWrapper>
    </div>
  );
};

export default MyProfilePage;

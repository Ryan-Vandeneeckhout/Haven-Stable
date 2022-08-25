import MyProfileContentWrapper from "../../wrappers/MyProfileWrappers/MyProfileContentWrapper";
import MyProfileItemWrapper from "../../wrappers/MyProfileWrappers/MyProfileItemWrapper";
import { useAuthContext } from "../useAuthContext";
import { useCollection } from "../useFirestoreDatabase";
import ProfileCardLandingPage from "../ProfileCardLandingPage";
import MyLogo from "./MyLogo";
import MyNav from "./MyNav";

const MyProfilePage = () => {
  const { user } = useAuthContext();

  const { databaseFirestore } = useCollection("HavenProfileSettings", [
    "uid",
    "==",
    user.uid,
  ]);

  return (
    <div>
      <MyLogo />
      <MyNav />
      <MyProfileContentWrapper>
        
        {databaseFirestore ? (
          <>
            {databaseFirestore.map((post) => (
              <div className="userInfomationFirebase">
                    <MyProfileItemWrapper title={"Avatar"}>
                        <img src={post.avatar}/> 
                    </MyProfileItemWrapper>
                    <MyProfileItemWrapper title={"Username"}>
                        <p>{post.username}</p>
                    </MyProfileItemWrapper>
                    <MyProfileItemWrapper title={"Interests"}>

                    </MyProfileItemWrapper>
              </div>
            ))}
          </>
        ) : null}
      </MyProfileContentWrapper>
    </div>
  );
};

export default MyProfilePage;

import MyProfileContentWrapper from "../../wrappers/MyProfileWrappers/MyProfileContentWrapper";
import MyProfileItemWrapper from "../../wrappers/MyProfileWrappers/MyProfileItemWrapper";
import { useAuthContext } from "../useAuthContext";
import { useCollection } from "../useFirestoreDatabase";
import MyLogo from "./MyLogo";
import MyNav from "./MyNav/MyNav";

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
                <MyProfileItemWrapper title={"avatar"}>
                  <div className="imageContainer">
                    <img src={post.avatar} alt="user avatar" />
                  </div>
                </MyProfileItemWrapper>
                <MyProfileItemWrapper title={"username"}>
                  <p>{post.username}</p>
                </MyProfileItemWrapper>
                <MyProfileItemWrapper title={"interests"}>
                  <>
                    {post.interests.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </>
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

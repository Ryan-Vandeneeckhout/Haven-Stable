import MyLogo from "./MyLogo";
import MyNav from "./MyNav/MyNav";

import MyProfileContentWrapper from "../../wrappers/MyProfileWrappers/MyProfileContentWrapper";
import MyProfileItemWrapper from "../../wrappers/MyProfileWrappers/MyProfileItemWrapper";
import { useAuthContext } from "../useAuthContext";
import { useCollection } from "../useFirestoreDatabase";

const MyMoments = () => {
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
                <>
                  {post.moments.map((item, index) => {
                    return (
                      <ul className="momentsContainer">
                        <h4 className="momentItem" key={index}>
                          {item.question}
                        </h4>
                        <p>{item.answer}</p>
                      </ul>
                    );
                  })}
                </>
              </div>
            ))}
          </>
        ) : null}
      </MyProfileContentWrapper>
    </div>
  );
};
export default MyMoments;

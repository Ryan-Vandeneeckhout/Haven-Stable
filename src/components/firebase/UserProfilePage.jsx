import { useParams } from "react-router-dom";
import { useCollection } from "./useFirestoreDatabase";
import NavMenu from "../navigation/NavMenu";
import UserProfilePageData from "./UserProfilePageData";
import "../sass/_profileCard.scss";

const UserProfilePage = () => {
  const postuid = useParams();
  const { databaseFirestore } = useCollection("HavenProfileSettings", [
    "uid",
    "==",
    postuid.postuid,
  ]);

  console.log(databaseFirestore);

  const renderProfilePage = () => {
    if (databaseFirestore === null) {
      return <p>Loading Users</p>;
    } else if (databaseFirestore !== null || databaseFirestore !== undefined) {
      return (
        <>
          {databaseFirestore.map((post) => (
            <>
              <h1>{post.username}</h1>
              <UserProfilePageData
                username={post.username}
                interests={post.interests}
                pronouns={post.pronouns}
                dateMoment={post.timeMomentCreated}
                avatar={post.avatar}
                moments={post.moments}
                location={post.location}
                uid={post.uid}
              />
            </>
          ))}
        </>
      );
    }
  };
  return (
    <>
      <NavMenu />
      <section>
        <div className="wrapper10">{renderProfilePage()}</div>
      </section>
    </>
  );
};
export default UserProfilePage;

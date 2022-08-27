import MyLogo from "./MyLogo";
import MyNav from "./MyNav/MyNav";
import { useState } from "react";
import useStateRef from "react-usestateref";
import { db } from "../config.js";
import { doc, updateDoc } from "firebase/firestore";

import MyProfileContentWrapper from "../../wrappers/MyProfileWrappers/MyProfileContentWrapper";
import { useAuthContext } from "../useAuthContext";
import { useCollection } from "../useFirestoreDatabase";
import OnBoarding12QuestionsInput from "../../pages/onboardingpages/OnBoarding12QuestionsInput";
import { JingQuestionList } from "../../pages/onboardingpages/JingQuestionList";

const MyMoments = () => {
  const { user } = useAuthContext();

  const { databaseFirestore } = useCollection("HavenProfileSettings", [
    "uid",
    "==",
    user.uid,
  ]);
  const [userInputMessage, setUserInputMessage] = useState("");
  const [question, setQuestion] = useState("");
  const [tagsarray, setTagsArray, tagsArrayRef] = useStateRef([]);
  const [, setTagValue, tagValueRef] = useStateRef(null);

  const date = new Date().toJSON();
  const pushData = () => {
    setTagValue({ question: question, answer: userInputMessage });

    setTagsArray(() => [...tagsarray, tagValueRef.current]);

    console.log(tagsArrayRef.current);
    writeUserData();
  };

  const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
      moments: tagsArrayRef.current,
      timeMomentCreated: date,
    });
  };

  return (
    <div>
      <MyLogo />
      <MyNav />
      <MyProfileContentWrapper>
        <ul className="momentsSubmitMyProfile">
          {JingQuestionList.slice(3, 4).map((item, index) => {
            return (
              <OnBoarding12QuestionsInput
                setUserInputMessage={setUserInputMessage}
                userInputMessage={userInputMessage}
                setQuestion={setQuestion}
                handleMoments={pushData}
                pushData={pushData}
                key={index}
                question={item.Question}
                contentID={item.ContentID}
              />
            );
          })}
        </ul>
        {databaseFirestore ? (
          <>
            {databaseFirestore.map((post) => (
                <ul className="myPastMoments">
                  {post.moments.map((item, index) => {
                    return (
                      <li>
                        <h4 className="momentItem" key={index}>
                          {item.question}
                        </h4>
                        <p>{item.answer}</p>
                      </li>
                    );
                  })}
                </ul>
            ))}
          </>
        ) : null}
      </MyProfileContentWrapper>
    </div>
  );
};
export default MyMoments;

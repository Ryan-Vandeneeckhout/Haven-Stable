import { useRef } from "react";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "../../firebase/useAuthContext";
import useStateRef from "react-usestateref";

const OnBoardingAvatarimg = (props) => {

  const [avatar, setAvatar, AvatarRef] = useStateRef(""); 
  const avatarRef = useRef();
  const { user } = useAuthContext();

  localStorage.setItem("avatar", "./assets/profileAvatars/profileDefault.png");
  
  const addClass = (e) => {
    let avatarselected = document.getElementsByClassName("selectedAvatar");
    for (let i = 0; i < avatarselected.length; i++)
      avatarselected[i].classList.remove("selectedAvatar");
    localStorage.setItem("avatar", e.target.getAttribute("src"));
    setAvatar(e.target.getAttribute("src")); 
    avatarRef.current.classList.add("selectedAvatar");
    writeUserData();

  };
const writeUserData = async () => {
    await updateDoc(doc(db, `HavenProfileSettings`, `${user.uid}`), {
    avatar: AvatarRef.current
    });
  };
  return (
    <div
      className="imgAvatar"
      ref={avatarRef}
      onClick={addClass}
    >
      <img
        src={props.AvatarImg}
        alt="Avatar Pictures"
      />
    </div>
  );
};
export default OnBoardingAvatarimg;

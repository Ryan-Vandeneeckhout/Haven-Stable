import { useRef } from "react";

const OnBoardingAvatarimg = (props) => {
  const avatarRef = useRef();
  localStorage.setItem("avatar", "./assets/profileAvatars/profileDefault.png");
  
  const addClass = (e) => {
      let avatarselected = document.getElementsByClassName("selectedAvatar");
      for (let i = 0; i < avatarselected.length; i++)
      avatarselected[i].classList.remove("selectedAvatar");
      localStorage.setItem("avatar", e.target.getAttribute('src'));
      avatarRef.current.classList.add("selectedAvatar");
      props.passData();
  };

  return (
    <div className="imgAvatar" onClick={addClass}>
      <img
        ref={avatarRef}
        src={`https://robohash.org/${props.numbers}.png?set=set4`}
        alt="Avatar Pictures"
      />
    </div>
  );
};
export default OnBoardingAvatarimg;

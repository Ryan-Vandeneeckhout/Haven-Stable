import { useState } from "react";
import { useRef } from "react";

const OnBoardingAvatarimg = (props) => {
  const [tagButtonSelected, setTagButtonSelected] = useState(false);
  const avatarRef = useRef();

  const addClass = () => {
    if (tagButtonSelected === false) {
      setTagButtonSelected(true);
      let avatarselected = document.getElementsByClassName("selectedAvatar");
      for (let i = 0; i < avatarselected.length; i++)
      avatarselected[i].classList.remove("selectedAvatar");
      
      avatarRef.current.classList.add("selectedAvatar");
      props.passData();
    } else {
      //Taglist if user wishes to choose another avatar//
      setTagButtonSelected(false);
      avatarRef.current.classList.remove("selectedAvatar");
      let avatarselected = document.getElementsByClassName("selectedAvatar");
      for (let i = 0; i < avatarselected.length; i++)
        avatarselected[i].classList.remove("selectedAvatar");
    }
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

import { Link } from "react-router-dom";

const InputLinked = (props) => {
  return (
    <div className={`buttonContainer ${props.ButtonClassContainer}`}>
      <Link className={props.ButtonClass} to={`${props.Linked}`}>
        <span className="textButton">{props.ButtonText}</span><span className={`imageButton ${props.Show}`}><img src="./assets/svg/arrow.svg" alt="Arrow"/></span>
      </Link>
      
    </div>
  );
};
export default InputLinked;

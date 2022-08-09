import { Link } from "react-router-dom";

const InputLinked = (props) => {
  return (
    <div className={`buttonContainer ${props.ButtonClassContainer}`}>
      <Link className={props.ButtonClass} to={`${props.Linked}`}>
        {props.ButtonText}
      </Link>
    </div>
  );
};
export default InputLinked;

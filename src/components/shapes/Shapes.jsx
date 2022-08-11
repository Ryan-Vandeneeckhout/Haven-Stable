import "../sass/_shapes.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Shapes = () => {
  
  return (
    <div className="shapes">
      {Array.from({ length: 15 }, (_, index) => <FontAwesomeIcon key={index} className="star" icon="fa-star" />)}
      </div>
  );
};
export default Shapes;
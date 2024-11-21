import "./Coffee.scss";
import { useNavigate } from "react-router-dom";

function SelectedCoffee({ item, setActiveLink }) {
  const navigate = useNavigate();

  const { name, image } = item;
  return (
    <div
      className="activeCoffee"
      onClick={() => {
        navigate("/coffee");
        setActiveLink(name.toLowerCase());
      }}
    >
      <div>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
    </div>
  );
}

export default SelectedCoffee;

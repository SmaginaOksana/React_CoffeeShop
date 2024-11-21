import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ActiveCoffeePage.scss";

function ActiveCoffeePage({ activeLink, setActiveLink }) {
  const navigate = useNavigate();
  const category = useSelector((state) => {
    for (let key in state) {
      if (key === activeLink) {
        return state[key];
      }
    }
  });

  return (
    <div className="containerActiveCoffee">
      <h2>{activeLink.toUpperCase()}</h2>
      {category.map((item) => {
        const { name, image, description } = item;
        return (
          <>
            <div>
              <h3>{name}</h3>
              <img src={image} alt={name} />
              <p>{description}</p>
            </div>
          </>
        );
      })}
      <button
        onClick={() => {
          navigate("/");
          setActiveLink("");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default ActiveCoffeePage;

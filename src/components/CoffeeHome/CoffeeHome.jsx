import "./CoffeeHome.scss";

function CoffeeHome({ item, setActiveLink, navigate }) {
  const { name, image } = item;

  return (
    <div
      className="coffee"
      onClick={() => {
        navigate("/toOrder");
        setActiveLink(name.toLowerCase());
      }}
    >
      <div>
        <img src={image} alt={name} />
      </div>
      <h5>{name}</h5>
    </div>
  );
}

export default CoffeeHome;

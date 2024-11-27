import "./HomePage.scss";
import { content } from "../../content/content.js";
import CoffeeHome from "../../components/CoffeeHome/CoffeeHome.jsx";
import { useSelector } from "react-redux";

export default function HomePage({ setActiveLink, navigate }) {
  const user = useSelector((state) => {
    return state.authUser;
  });

  return (
    <>
      <header className="headerHomePage">
        <div className="container">
          <div className="greetings">
            <h5>Welcome!</h5>
            <h4>{user.name}</h4>
          </div>
          <div className="basket">
            <img
              src="/homePageIMG/buy.png"
              alt="buy"
              onClick={() => {
                navigate("/basket");
              }}
            />
          </div>
        </div>
      </header>
      <main className="mainHomePage">
        <div className="container">
          <h4>Select your coffee</h4>
          <div className="coffeeContainer">
            {content.map((item, index) => {
              return (
                <CoffeeHome
                  item={item}
                  key={index}
                  setActiveLink={setActiveLink}
                  navigate={navigate}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

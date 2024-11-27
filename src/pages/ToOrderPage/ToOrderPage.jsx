import "./ToOrderPage.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { changeBasketItemCount } from "../../functions/changeBasketItemCount.js";
import { timeOfOrder } from "../../functions/timeOfOrder.js";
import { addToBasket } from "../../functions/addToBasket.js";

function ToOrder({ activeLink, navigate, setFlag }) {
  const typeOfCoffee = useSelector((state) => {
    for (let key in state) {
      if (key === activeLink) {
        return state[key];
      }
    }
  });
  const { name, image, price } = typeOfCoffee;

  const basket = useSelector((state) => {
    return state.basket;
  });

  const [ristretto, setRistretto] = useState("");
  const [takeAway, setTakeAway] = useState("");
  const [volume, setVolume] = useState("");
  const [totalCount, setTotalCount] = useState(1);
  const [coffeeData, setCoffeeData] = useState({});

  const data = {
    typeOfCoffee,
    basket,
    ristretto,
    takeAway,
    volume,
    totalCount,
    setCoffeeData,
    setFlag,
  };

  return (
    <>
      <header className="headerToOrderPage">
        <div className="container">
          <div className="top">
            <div
              onClick={() => {
                navigate("/home");
              }}
            >
              <img src="/left.png" alt="left" />
            </div>
            <h4>Order</h4>
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
          <div className="mainImage">
            <img src={image} alt={activeLink} />
          </div>
        </div>
      </header>
      <main className="mainToOrderPage">
        <div className="container">
          <div className="countSection">
            <h5>{name}</h5>
            <div className="count">
              <span
                onClick={() => {
                  changeBasketItemCount(totalCount, false, setTotalCount);
                }}
              >
                -
              </span>
              <span>{totalCount}</span>
              <span
                onClick={() => {
                  changeBasketItemCount(totalCount, true, setTotalCount);
                }}
              >
                +
              </span>
            </div>
          </div>
          <hr />
          <div className="ristretto">
            <h5>Ristretto</h5>
            <div>
              <div
                onClick={() => {
                  setRistretto("one");
                }}
                className={ristretto === "one" ? "active" : ""}
              >
                <span>One</span>
              </div>
              <div
                onClick={() => {
                  setRistretto("two");
                }}
                className={ristretto === "two" ? "active" : ""}
              >
                <span>Two</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="takeaway">
            <h5>Onsite / Takeaway</h5>
            <div className="choiceTakeaway">
              <div
                onClick={() => {
                  setTakeAway("onsite");
                }}
                className={takeAway === "onsite" ? "active" : ""}
              >
                <img src="/toOrderPage/onsideWhite.png" alt="onside" />
              </div>
              <div
                onClick={() => {
                  setTakeAway("takeaway");
                }}
                className={takeAway === "takeaway" ? "active" : ""}
              >
                <img src="/toOrderPage/takeawayWhite.png" alt="takeaway" />
              </div>
            </div>
          </div>
          <hr />
          <div className="volumeSection">
            <h5>Volume, ml</h5>
            <div className="volume">
              <div
                onClick={() => {
                  setVolume("250");
                }}
                className={volume === "250" ? "active" : ""}
              >
                <div>
                  <img
                    src="/toOrderPage/volume.png"
                    alt="volume250"
                    className="volume_250"
                  />
                  <span>250</span>
                </div>
              </div>
              <div
                onClick={() => {
                  setVolume("350");
                }}
                className={volume === "350" ? "active" : ""}
              >
                <div>
                  <img
                    src="/toOrderPage/volume.png"
                    alt="volume350"
                    className="volume_350"
                  />
                  <span>350</span>
                </div>
              </div>
              <div
                onClick={() => {
                  setVolume("450");
                }}
                className={volume === "450" ? "active" : ""}
              >
                <div>
                  <img
                    src="/toOrderPage/volume.png"
                    alt="volume450"
                    className="volume_450"
                  />
                  <span>450</span>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="time">
            <h5>The order will be ready in 2 hours by</h5>
            <span>{timeOfOrder()}</span>
          </div>
          <hr />
        </div>
      </main>
      <footer className="footerToOrderPage">
        <div className="container">
          <div className="amount">
            <h4>Total amount</h4>
            <h4>
              {(totalCount * price) % 1 === 0
                ? `${totalCount * price}.0 BYN`
                : `${totalCount * price} BYN`}
            </h4>
          </div>
          {coffeeData === false && (
            <h5 className="options">Please,select all coffee options...</h5>
          )}
          <button
            onClick={() => {
              addToBasket(data);
            }}
          >
            Add to basket
          </button>
        </div>
      </footer>
    </>
  );
}

export default ToOrder;

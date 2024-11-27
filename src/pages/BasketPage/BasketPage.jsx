import "./BasketPage.scss";
import BasketItem from "../../components/BasketItem/BasketItem";
import { useSelector } from "react-redux";
import { deleteBasketItem } from "../../functions/deleteBasketItem";

function BasketPage({ navigate, setFlag }) {
  const basket = useSelector((state) => {
    return state.basket;
  });
  const totalPrice = basket.items.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <>
      <header className="headerBasket">
        <div className="container">
          <div
            onClick={() => {
              navigate("/home");
            }}
            className="left"
          >
            <img src="/left.png" alt="left" />
          </div>
          <h4>Basket</h4>
        </div>
      </header>
      <main className="mainBasket">
        <div className="container">
          {basket.items.length > 0 ? (
            basket.items.map((item, index) => {
              return (
                <BasketItem
                  item={item}
                  key={index}
                  setFlag={setFlag}
                  basket={basket}
                />
              );
            })
          ) : (
            <p>The basket is empty</p>
          )}
        </div>
      </main>
      <footer className="footerBasket">
        <div className="container">
          <div className="totalPrice">
            <h5>Total Price</h5>
            <h3>{totalPrice} BYN</h3>
          </div>
          <button
            onClick={() => {
              if (basket.items.length === 0) {
                return;
              } else {
                navigate("/ordered");
                basket.items.forEach((item) => {
                  deleteBasketItem(basket, item, setFlag);
                });
              }
            }}
          >
            <img src="/buy.png" alt="buy" /> <span>Order</span>
          </button>
        </div>
      </footer>
    </>
  );
}

export default BasketPage;
